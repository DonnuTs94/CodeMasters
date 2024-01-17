import express from "express"
import cartsControllers from "../controllers/cartController.js"

const route = express.Router()

route.post("/", cartsControllers.addToCart)
route.get("/:id", cartsControllers.getCartById)
route.delete("/:id", cartsControllers.deleteProduct)

export default route
