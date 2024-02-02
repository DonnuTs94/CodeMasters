import { Router } from "express"
import protectedControllers from "../controller/protectedController.js"

import { protectedRoute } from "../middleware/authMiddleware.js"

const route = Router()

route.get("/", protectedRoute, protectedControllers.get)

export default route
