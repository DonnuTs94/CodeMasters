import express from "express"
import cartsControllers from "../controllers/cartController.js"

const route = express.Router()

route.get("/", cartsControllers.getAllCart)
route.get("/:id", cartsControllers.getCartById)
route.post("/", cartsControllers.addToCart)
route.delete("/:id", cartsControllers.deleteCart)

export default route
