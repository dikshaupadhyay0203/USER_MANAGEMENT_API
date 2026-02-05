import express from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";
import { checkAuth, validateUserId } from "../middleware/auth.js";
import { checkBodyAuth } from "../middleware/auth.js";
const router = express.Router();

// GET users (with auth)
router.get("/", checkAuth, getUsers);
router.get("/", checkBodyAuth, createUser);

// POST create user
router.post("/", createUser);

export default router;
