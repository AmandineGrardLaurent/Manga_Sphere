import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { encodeJWT } from "../../services/jwt/jwt.helper";

export const login: RequestHandler = async (req, res, next) => {
  const user = req.body;
  const token = await encodeJWT(user);
  res.cookie("auth_token", token, {
    secure: false,
    httpOnly: true,
    maxAge: 36000000,
  });

  res.status(200).json({ message: "Bienvenue sur Manga Sphere" });
};
