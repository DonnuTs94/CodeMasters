import cart from "../cart.js"
import products from "../product.js"

const cartsControllers = {
  addToCart: (req, res) => {
    try {
      const id = cart.length + 1
      const product = products.find(
        (product) => parseInt(req.body.productId) === product.id
      )

      const totalPrice = product.price * req.body.qty

      const createProduct = {
        id: id,
        quantity: req.body.qty,
        productId: req.body.productId,
        product: product,
        total: totalPrice,
      }

      cart.push(createProduct)

      return res.json({
        data: createProduct,
      })
    } catch (err) {
      return res.json({
        message: err.message,
      })
    }
  },
  getCartById: (req, res) => {
    try {
      const id = parseInt(req.params.id)

      const dataCartByID = cart.find((item) => id === item.id)

      if (!dataCartByID) {
        return res.json({
          message: "Item not found",
        })
      }

      return res.json({
        data: dataCartByID,
      })
    } catch (err) {
      return res.json({
        message: err.message,
      })
    }
  },
  deleteProduct: (req, res) => {
    try {
      const id = parseInt(req.params.id)

      const foundProduct = cart.findIndex((item) => id === item.id) + 1

      if (!foundProduct) {
        return res.json({
          message: "Item not found",
        })
      }

      cart.splice(foundProduct, 1)

      return res.json({
        message: "Success",
      })
    } catch (err) {
      return res.json({
        message: err.message,
      })
    }
  },
}

export default cartsControllers
