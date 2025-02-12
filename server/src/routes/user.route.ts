import express from "express";
import userActions from "../modules/user/userActions";
import { hashPassword } from "../middlewares/argon2.middleware";
import { validateDataFormUser } from "../middlewares/joi.middleware";

const router = express.Router();

router.get("/api/user", userActions.browse);
router.get("/api/user/:id", userActions.read);
router.post(
  "/api/user",
  validateDataFormUser,
  hashPassword,
  userActions.verifyEmailExists,
  userActions.add,
);
router.put("/api/user/:id", userActions.edit);
router.delete("/api/user/:id", userActions.destroy);

export default router;
