import express from "express"
import { dbEcomms } from "../configs/dbRoute.js"

const db = dbEcomms

const route = express.Router()

route.post("/product", (req, res) => {
  try {
    const { name, category, price, in_stock, description } = req.body

    const query = `insert into products(name, category, price, in_stock, description) values(?,?,?,?,?)`

    db.query(
      query,
      [name, category, price, in_stock, description],
      (err, result) => {
        console.log(result)
        console.log(err)
        return res.json({
          message: "Success input data",
          data: result,
        })
      }
    )
  } catch (err) {
    console.log(err)
    return res.json({
      message: err.message,
    })
  }
})

route.get("/product", (req, res) => {
  try {
    const query = "select * from products where in_stock = true"

    db.query(query, (err, result) => {
      return res.json({
        data: result,
      })
    })
  } catch (err) {
    console.log(err)
    return res.json({
      message: err.message,
    })
  }
})

route.post("/cart", (req, res) => {
  try {
    const { product_id, quantity } = req.body
    const queryGetProduct = `select * from products where id = ${product_id}`

    db.query(queryGetProduct, (err, result) => {
      if (err) {
        return res.json({
          message: err.message,
        })
      }

      const product = result[0]

      if (!product) {
        return res.json({
          message: "Product doesn't exist",
        })
      }

      const totalPrice = product.price * quantity

      const queryAddToCart = `insert into cart(product_id, quantity, total) values(?,?, ${totalPrice})`

      db.query(
        queryAddToCart,
        [product_id, quantity, totalPrice],
        (err, result) => {
          if (err) {
            return res.json({
              message: err.message,
            })
          }

          return res.json({
            message: "Success",
            data: result,
          })
        }
      )
    })
  } catch (err) {
    console.log(err)
    return res.json({
      message: err.message,
    })
  }
})

export default route
