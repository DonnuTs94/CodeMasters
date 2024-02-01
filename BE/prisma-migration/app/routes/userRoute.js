import { Router } from "express"
import authController from "../controller/authController.js"
import { validateTokenRequest } from "../middleware/authMiddleware.js"

const route = Router()

route.post("/token", validateTokenRequest, authController.token)
route.post("/", authController.createUser)

export default route
