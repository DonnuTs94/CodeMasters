import { Router } from "express"
import protectedControllers from "../controller/protectedController.js"

import {
  authorizePermission,
  protectedRoute,
} from "../middleware/authMiddleware.js"
import { Permission } from "../authorization.js"

const route = Router()

route.get("/", protectedRoute, protectedControllers.get)

route.get(
  "/books",
  authorizePermission(Permission.BROWSE_BOOKS),
  async (req, res) => {
    res.json({
      message: "You have successfully accessed the books route!",
    })
  }
)

route.post(
  "/books",
  authorizePermission(Permission.ADD_BOOK),
  async (req, res) => {
    res.json({
      message: "You have successfully accessed the books route!",
    })
  }
)

export default route
