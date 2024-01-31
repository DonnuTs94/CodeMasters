import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
  res.json({
    message: "publisher",
  })
})

export default router
