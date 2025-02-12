import express from "express";
import { login } from "../modules/auth/AuthActions";

const router = express.Router();

router.post("/login", login);

export default router;
