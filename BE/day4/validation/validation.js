import { body, query, validationResult } from "express-validator"

export const registerValidation = () => [
  body("email").notEmpty().isEmail().withMessage("Invalid email"),
  body("password")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  body("passwordConfirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password")
    }
    return true
  }),
]
