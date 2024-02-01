import express from "express"
import userRoute from "./app/routes/userRoute.js"

const app = express()
app.use(express.json())

app.use("/auth", userRoute)

export default app
