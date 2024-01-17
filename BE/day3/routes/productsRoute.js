import express from "express"
import productControllers from "../controllers/productControllers.js"

const router = express.Router()

router.get("/", productControllers.getAllProduct)
router.get("/:id", productControllers.getProductByID)

export default router
