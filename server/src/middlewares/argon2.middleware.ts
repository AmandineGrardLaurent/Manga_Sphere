import type { RequestHandler } from "express";
import {
  hashPasswordHelper,
  verifyPasswordHelper,
} from "../services/argon2id.helper";

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

export const comparePassword: RequestHandler = async (req, res, next) => {
  try {
    const { dbpassword, password } = req.body;
    const isValid = await verifyPasswordHelper(dbpassword, password);
    if (!isValid) {
      req.body.dbpassword = undefined;

      res.status(403).json({
        message: "Le couple email / mot de passe est incorrect.",
      });
      return;
    }

    next();
  } catch (e) {
    res.status(500).json({
      message: "Une erreur est survenue. Veuillez réessayer ultérieurement.",
    });
  }
};
