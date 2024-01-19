import express from "express"
import { body, query, validationResult } from "express-validator"
import { registerValidation } from "./validation/validation.js"

const app = express()
const port = 3000

app.use(express.json())

app.get("/", query("person").notEmpty(), (req, res) => {
  const result = validationResult(req)

  if (!result.isEmpty()) {
    return res.status(400).json({
      errors: result.array(),
    })
  }

  res.json({
    message: `Hello ${req.query.person}`,
  })
})

const bodyCheck = [
  body("password").notEmpty().isLength({ min: 8 }),
  body("email").isEmail().notEmpty(),
]

app.post("/login", bodyCheck, (req, res) => {
  try {
    const result = validationResult(req)

    if (!result.isEmpty()) {
      return res.json({
        errors: result.array(),
      })
    }

    return res.json({
      message: "success",
      token: "TOKEN",
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    })
  }
})

app.post("/register", registerValidation(), (req, res) => {
  try {
    const result = validationResult(req)
    if (!result.isEmpty()) {
      return res.status(400).json({
        errors: result.array(),
      })
    }

    return res.status(200).json({
      message: "Register success",
    })
  } catch (error) {
    return res.status(500).json({
      message: err.message,
    })
  }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
