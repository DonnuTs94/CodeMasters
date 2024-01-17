import products from "../product.js"

const productControllers = {
  getAllProduct: (req, res) => {
    try {
      return res.json({
        data: products,
      })
    } catch (err) {
      return res.json({
        message: err.message,
      })
    }
  },
  getProductByID: (req, res) => {
    try {
      let foundProductById = products.find(
        (product) => parseInt(req.params.id) === product.id
      )

      return res.json({
        data: foundProductById,
      })
    } catch (err) {
      return res.json({
        message: err.message,
      })
    }
  },
}

export default productControllers
