import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const protectedControllers = {
  get: async (req, res) => {
    try {
      return res.json({
        message: "Protected say Hello",
        data: req.user,
      })
    } catch (err) {
      return res.json({
        message: err.message,
      })
    }
  },
}

export default protectedControllers
