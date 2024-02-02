import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import randomString from "randomstring"

const prisma = new PrismaClient()

const authController = {
  createUser: async (req, res) => {
    try {
      const { name, email, password } = req.body

      const hashPassword = bcrypt.hashSync(password, 10)

      await prisma.user.create({
        data: {
          email: email.toLowerCase(),
          name: name,
          password: hashPassword,
          roleId: 2,
        },
      })

      return res.status(200).json({
        message: "Success create user",
      })
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        message: err.message,
      })
    }
  },
  token: async (req, res) => {
    try {
      const { email, password } = req.body

      const userLogin = await prisma.user.findFirst({
        where: {
          email: email,
        },
      })

      if (!userLogin) {
        return res.status(400).json({
          message: "Invalid credentials",
        })
      }

      if (userLogin.is_blocked === true) {
        return res.json({
          message: "User is blocked",
        })
      }

      const passwordIsValid = bcrypt.compareSync(password, userLogin.password)

      if (!passwordIsValid) {
        return res.status(400).json({
          message: "Invalid credentials",
        })
      }

      const token = randomString.generate()

      await prisma.token.create({
        data: {
          userId: userLogin.id,
          token: token,
          expired_at: new Date(Date.now() + 24 * 60 * 60 * 1000),
        },
      })

      delete userLogin.password

      return res.status(200).json({
        message: "Login Success",
        data: userLogin,
        token,
      })
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        message: err.message,
      })
    }
  },
}

export default authController
