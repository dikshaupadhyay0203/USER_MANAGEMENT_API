import express from "express";
import userRouter from "./routes/users.routes.js";

const app = express();

// Middleware
app.use(express.json());

// ✅ GET route (sir asked)
app.get("/", (req, res) => {
  res.status(200).send("User Management API is running");
});

// User routes
app.use("/api/users", userRouter);

export default app;
