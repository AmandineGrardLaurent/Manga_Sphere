import express from "express";
const router = express.Router();

import CommentRoute from "./routes/comment.route";
import SeasonRoute from "./routes/season.route";
import SerieRoute from "./routes/serie.route";
import UserRoute from "./routes/user.route";
import VolumeRoute from "./routes/volume.route";

router.use("/", UserRoute);
router.use("/", SerieRoute);
router.use("/", SeasonRoute);
router.use("/", VolumeRoute);
router.use("/", CommentRoute);

export default router;
