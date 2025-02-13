import express from "express";
import commentActions from "../modules/comment/commentActions";

const router = express.Router();

router.get(
  "/api/serie/commentary/:id",
  commentActions.browseCommentaryFromOneSerie,
);
router.post("/api/serie/commentary", commentActions.add);

export default router;
