import express from "express"
import userRouter from "./routes/users.routes.js"

const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
  res.send("User management is run")

})

app.use("/api/users",userRouter)

export default app