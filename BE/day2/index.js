const express = require("express")
const app = express()

const port = 6969

app.listen(port, () => {
  console.log(`Running at Port ${port}`)
})
