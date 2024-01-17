import express from "express"
import productRoute from "./routes/productsRoute.js"
import cartRoute from "./routes/cartRoute.js"
import orderRoute from "./routes/orderRoute.js"

const app = express()
const port = 3000
app.use(express.json())

app.use("/products", productRoute)
app.use("/shopping-cart", cartRoute)
app.use("/orders", orderRoute)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
