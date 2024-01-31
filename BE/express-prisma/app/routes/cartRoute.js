import { Router } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const route = Router()

route.post("/", async (req, res) => {
  try {
    const { product_id, quantity } = req.body

    const foundProductId = await prisma.product.findFirst({
      where: {
        id: product_id,
      },
    })

    if (!foundProductId) {
      return res.json({
        message: "PRODUCT GA ONO SU",
      })
    }

    const totalJajan = foundProductId.price * quantity

    const cartData = await prisma.cart.create({
      data: {
        product_id,
        quantity,
        total: totalJajan,
      },
    })

    return res.status(200).json({
      message: "WOKEEE",
      data: cartData,
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      message: "ERROR ASU",
    })
  }
})

route.get("/", async (req, res) => {
  try {
    const getCart = await prisma.cart.findMany()

    if (getCart.length === 0) {
      return res.json({
        message: "Cart is empty",
      })
    }

    let sum = 0

    getCart.forEach((item) => {
      sum += item.total
    })

    return res.status(200).json({
      message: "WOKEE",
      data: getCart,
      total: sum,
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      message: "Server Error",
    })
  }
})

route.delete("/:id", async (req, res) => {
  try {
    await prisma.cart.delete({
      where: {
        id: parseInt(req.params.id),
      },
    })

    return res.status(200).json({
      message: "Success deleted cart",
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      message: err.message,
    })
  }
})

export default route
