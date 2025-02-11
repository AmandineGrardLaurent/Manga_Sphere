import express from "express";
const router = express.Router();

import SerieRoute from "./routes/serie.route";
import UserRoute from "./routes/user.route";

router.use("/", UserRoute);
router.use("/", SerieRoute);

export default router;
