import express from "express"
import userRoute from "./app/routes/userRoute.js"
import protectedRoute from "./app/routes/protectedRoute.js"

const app = express()
app.use(express.json())

app.use("/auth", userRoute)
app.use("/protected", protectedRoute)

export default app
