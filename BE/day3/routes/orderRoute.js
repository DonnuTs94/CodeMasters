import express from "express"
import ordersController from "../controllers/ordersController.js"

const route = express.Router()

route.post("/", ordersController.addOrders)
route.get("/", ordersController.getAllOrders)

export default route
