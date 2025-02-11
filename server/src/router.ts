import express from "express";
const router = express.Router();

import UserRoute from "./routes/user.route";

router.use("/", UserRoute);

export default router;
