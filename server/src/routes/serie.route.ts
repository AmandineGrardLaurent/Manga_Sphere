import express from "express";
import { validateDataFormSerie } from "../middlewares/joi.middleware";
import serieActions from "../modules/serie/serieActions";

const router = express.Router();

router.get("/api/serie", serieActions.browse);
router.get("/api/serie/:id", serieActions.read);
router.put("/api/serie/:id", serieActions.edit);
router.post("/api/serie", validateDataFormSerie, serieActions.add);
router.delete("/api/serie/:id", serieActions.destroy);

export default router;
