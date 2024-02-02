import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const validateTokenRequest = (req, res, next) => {
  const error = {}
  const { email, password } = req.body

  if (!email) {
    error.email = "Email is required"
  }

  if (!password) {
    error.password = "Password is required"
  }

  if (Object.keys(error).length > 0) {
    return res.status(422).json(error)
  }

  next()
}

export const protectedRoute = async (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({
      error: "Unauthorize",
    })
  }

  const checkTokenExist = await prisma.token.findUnique({
    where: {
      token,
    },
    include: {
      User: {
        select: {
          id: true,
          email: true,
          name: true,
          is_blocked: true,
        },
      },
    },
  })

  if (!checkTokenExist) {
    return res.status(401).json({
      message: "Invalid token",
    })
  }

  if (checkTokenExist.expired_at < new Date()) {
    return res.status(401).json({
      message: "Expired token",
    })
  }

  if (checkTokenExist.User.is_blocked === true) {
    return res.status(401).json({
      message: "Blocked user",
    })
  }

  req.user = checkTokenExist.User

  console.log(req.user)
  next()
}
