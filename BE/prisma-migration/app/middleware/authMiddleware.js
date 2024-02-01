export const validateTokenRequest = (req, res, next) => {
  const error = {}
  const { email, password } = req.body

  if (!email) {
    error.email = "Email is required"
  }

  if (!password) {
    error.password = "Password is required"
  }

  if (Object.keys(error).length > 0) {
    return res.status(422).json(error)
  }

  next()
}
