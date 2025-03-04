import express from "express";
import favorisActions from "../modules/favoris/favorisActions";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.get(
  "/api/favoris",
  userActions.addUserByTokenEmailForComment,
  favorisActions.browse,
);

router.post(
  "/api/favoris",
  userActions.addUserByTokenEmailForComment,
  favorisActions.add,
);

export default router;
