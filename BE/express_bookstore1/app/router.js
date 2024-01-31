import { Router } from "express"
import authorsRoute from "./routes/authorsRoute.js"
import booksRoute from "./routes/booksRoute.js"
import categoriesRoute from "./routes/categoriesRoute.js"
import publishersRoute from "./routes/publishersRoute.js"

const router = Router()

router.use("/books", booksRoute)
router.use("/authors", authorsRoute)
router.use("/categories", categoriesRoute)
router.use("/publishers", publishersRoute)

export default router
