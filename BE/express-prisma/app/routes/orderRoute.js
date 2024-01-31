import { Router } from "express"
import { PrismaClient } from "@prisma/client"

const route = Router()
const prisma = new PrismaClient()

route.post("/", async (req, res) => {
  try {
    const getCartData = await prisma.cart.findMany({
      include: {
        products: true,
      },
    })

    let sum = 0
    getCartData.forEach((item) => {
      sum += item.total
    })

    const currentDate = new Date()

    const findCartIds = getCartData.map((id) => {
      return parseInt(id.id)
    })

    const createOrder = await prisma.orders.create({
      data: {
        total: sum,
        date: currentDate,
        number: toString(Math.floor(Math.random() * 1000)), // INVOICE
      },
    })

    const orderItemData = getCartData.map((item) => {
      return {
        order_id: createOrder.id,
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.products.price,
        total: item.total,
      }
    })

    await prisma.order_items.createMany({
      data: orderItemData,
    })

    await prisma.cart.deleteMany({
      where: {
        id: {
          in: findCartIds,
        },
      },
    })

    return res.json({
      message: "Success",
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      message: err.message,
    })
  }
})

route.get("/", async (req, res) => {
  try {
    const orderData = await prisma.orders.findMany({
      include: {
        order_items: {
          include: {
            products: true,
          },
        },
      },
    })

    return res.json({
      message: "Success",
      data: orderData,
    })
  } catch (error) {
    return res.json({
      message: error.message,
    })
  }
})

route.get("/:id", async (req, res) => {
  try {
    const getOrderDAta = await prisma.orders.findFirst({
      where: {
        id: req.params.id,
      },
      include: {
        order_items: true,
      },
    })

    if (!getOrderDAta) {
      return res.json({
        message: "ga ada coeg",
      })
    }

    return res.status(200).json({
      data: getOrderDAta,
      message: "Horay",
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      message: err.message,
    })
  }
})

export default route
