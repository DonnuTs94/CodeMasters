import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
  res.json({
    message: "books",
  })
})

export default router
