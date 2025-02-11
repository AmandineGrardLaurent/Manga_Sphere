import express from "express";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.get("/api/user", userActions.browse);
router.get("/api/user/:id", userActions.read);
router.post("/api/user", userActions.add);
router.put("/api/user/:id", userActions.edit);
router.delete("/api/user/:id", userActions.destroy);

export default router;
