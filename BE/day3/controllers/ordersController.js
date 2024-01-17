import cart from "../cart.js"
import orders from "../orders,js"

const ordersController = {
  addOrders: (req, res) => {
    try {
      const id = orders.length + 1
      const cartData = cart.find(
        (item) => parseInt(req.body.cartId) === item.id
      )

      if (!cartData) {
        return res.json({
          message: "cart not found",
        })
      }

      const foundCartByIndex = cart.findIndex(
        (item) => parseInt(req.body.id) === item.id
      )

      const createOrders = {
        id: id,
        cartData,
      }

      orders.push(createOrders)

      cart.splice(foundCartByIndex, 1)
      return res.json({
        data: createOrders,
      })
    } catch (err) {
      return res.json({
        message: err.message,
      })
    }
  },
  getAllOrders: (req, res) => {
    try {
      return res.json({
        data: orders,
      })
    } catch (err) {
      return res.json({
        message: err.message,
      })
    }
  },
}

export default ordersController
