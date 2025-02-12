import express from "express";
const router = express.Router();

import AuthRoute from "./routes/auth.route";
import SeasonRoute from "./routes/season.route";
import SerieRoute from "./routes/serie.route";
import UserRoute from "./routes/user.route";
import VolumeRoute from "./routes/volume.route";

router.use("/", AuthRoute);
router.use("/", UserRoute);
router.use("/", SerieRoute);
router.use("/", SeasonRoute);
router.use("/", VolumeRoute);

export default router;
