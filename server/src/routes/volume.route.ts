import express from "express";
import seasonActions from "../modules/season/seasonActions";
import volumeActions from "../modules/volume/volumeActions";

const router = express.Router();

router.get("/api/volume", volumeActions.browse);
router.get("/api/serie/volume/:id", volumeActions.readAllVolumesFromOneSerie);
router.put("/api/volume/:id", volumeActions.edit);
router.post("/api/volume", volumeActions.add);
router.delete("/api/volume/:id", volumeActions.destroy);

export default router;
