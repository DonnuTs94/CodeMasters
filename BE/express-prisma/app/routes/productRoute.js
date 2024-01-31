import { Router } from "express"
import { PrismaClient } from "@prisma/client"

const route = Router()

const prisma = new PrismaClient()

route.get("/", async (req, res) => {
  try {
    if (req.query.id) {
      const productIds = req.query.id.map(Number).filter((id) => !isNaN(id))

      const productsData = await prisma.product.findMany({
        where: {
          id: {
            in: productIds,
          },
        },
      })

      return res.json({
        query: req.query,
        productsData,
      })
    } else {
      const data = await prisma.product.findMany()

      return res.status(200).json({
        message: "Success",
        data: data,
      })
    }
  } catch (error) {
    console.log(error)
    return res.json({
      message: error.message,
    })
  }
})

route.get("/:id", async (req, res) => {
  try {
    const dataProduct = await prisma.product.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    })

    if (!dataProduct) {
      return res.json({
        message: "Ga ada cok",
      })
    }

    return res.json({
      dataProduct,
    })
  } catch (err) {
    return res.json({
      message: err.message,
    })
  }
})

route.post("/", async (req, res) => {
  try {
    const { name, category, in_stock, description, price } = req.body

    const createProduct = await prisma.product.create({
      data: {
        name: name,
        category: category,
        in_stock: in_stock,
        description: description,
        price: price,
      },
    })

    return res.json({
      message: "Success",
      data: createProduct,
    })
  } catch (err) {
    console.log(err)
    return res.json({
      message: err.message,
    })
  }
})

route.put("/:id", async (req, res) => {
  try {
    const data = await prisma.product.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        ...req.body,
      },
    })

    return res.json({
      message: "success",
      data: data,
    })
  } catch (err) {
    console.log(err)
    return res.json({
      message: err.message,
    })
  }
})

route.delete("/:id", async (req, res) => {
  try {
    await prisma.product.delete({
      where: {
        id: parseInt(req.params.id),
      },
    })

    return res.json({
      message: "success",
    })
  } catch (err) {
    return res.json({
      message: err.message,
    })
  }
})

export default route
