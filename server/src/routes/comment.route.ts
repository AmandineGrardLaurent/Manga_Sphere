import express from "express";
import { validateDataFormFromComment } from "../middlewares/joi.middleware";
import commentActions from "../modules/comment/commentActions";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.get(
  "/api/serie/commentary/:id",
  commentActions.browseCommentaryFromOneSerie,
);
router.post(
  "/api/serie/commentary",
  userActions.addUserByTokenEmailForComment,
  validateDataFormFromComment,
  commentActions.add,
);

export default router;
