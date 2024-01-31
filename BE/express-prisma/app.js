import express from "express"
import productRoute from "./app/routes/productRoute.js"
import cartRoute from "./app/routes/cartRoute.js"
import orderRoute from "./app/routes/orderRoute.js"

const app = express()
app.use(express.json())

app.use("/product", productRoute)
app.use("/cart", cartRoute)
app.use("/order", orderRoute)

export default app
