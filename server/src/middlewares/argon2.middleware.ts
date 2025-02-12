import type { RequestHandler } from "express";
import { hashPasswordHelper } from "../services/argon2id.helper";

export const hashPassword: RequestHandler = async (req, res, next) => {
  const { password } = req.body;

  try {
    const newPassword: string = await hashPasswordHelper(password);
    if (newPassword) {
      req.body.password = newPassword;
      next();
    }
  } catch (err) {
    res.status(500);
  }
};
