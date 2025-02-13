import express from "express";
import { comparePassword } from "../middlewares/argon2.middleware";
import { login } from "../modules/auth/AuthActions";
import { getUserByEmail } from "../modules/user/userActions";

const router = express.Router();

router.post("/auth", getUserByEmail, comparePassword, login);

export default router;
