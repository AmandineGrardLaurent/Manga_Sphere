import express from "express";
import seasonActions from "../modules/season/seasonActions";

const router = express.Router();

router.get("/api/season", seasonActions.browse);
router.get("/api/serie/season/:id", seasonActions.readAllSeasonsFromOneSerie);
router.put("/api/season/:id", seasonActions.edit);
router.post("/api/season", seasonActions.add);
router.delete("/api/season/:id", seasonActions.destroy);

export default router;
