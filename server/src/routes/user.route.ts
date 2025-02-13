import express from "express";
import { hashPassword } from "../middlewares/argon2.middleware";
import { validateDataFormUser } from "../middlewares/joi.middleware";
import userActions from "../modules/user/userActions";

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

// gestion admin
router.get("/api/waiting", userActions.browseWaitingUsers);
router.put("/api/waiting/:id", userActions.editWaitingUser);
router.get("/api/accepted", userActions.browseAcceptedUsers);

export default router;
