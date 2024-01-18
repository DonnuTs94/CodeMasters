import cart from "../cart.js"
import products from "../product.js"

const cartsControllers = {
  addToCart: (req, res) => {
    try {
      const { productId, qty } = req.body
      const id = cart.length + 1
      const product = products.find(
        (product) => parseInt(productId) === product.id
      )

      if (!productId || !qty) {
        return res.status(400).json({
          message: "Product and quantity are required",
        })
      }

      if (!product) {
        return res.status(400).json({
          message: "item do not exist",
        })
      }

      if (product.inStock === false) {
        return res.status(400).json({
          message: "Out of stock!",
        })
      }

      const totalPrice = product.price * qty

      const createProduct = {
        id: id,
        quantity: qty,
        productId: productId,
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
  deleteCart: (req, res) => {
    try {
      const id = parseInt(req.params.id)

      const foundCart = cart.findIndex((item) => id === item.id)
      const dataCartByID = cart.find((item) => id === item.id)

      if (!dataCartByID) {
        return res.json({
          message: "Item not found",
        })
      }

      cart.splice(foundCart, 1)

      return res.json({
        message: "Success",
      })``
    } catch (err) {
      return res.json({
        message: err.message,
      })
    }
  },
  getAllCart: (req, res) => {
    try {
      res.json({
        data: cart,
      })
    } catch (err) {
      return res.json({
        message: err.message,
      })
    }
  },
}

export default cartsControllers
