import type { RequestHandler } from "express";
import commentRepository from "./commentRepository";

const browseCommentaryFromOneSerie: RequestHandler = async (req, res, next) => {
  try {
    const serieId = Number.parseInt(req.params.id);
    const comments = await commentRepository.readAllCommentary(serieId);
    if (comments == null) {
      res.sendStatus(404);
    } else {
      res.json(comments);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const commentary = {
      comment: req.body.comment,
      serie_id: req.body.id,
      user_id: req.body.user_id,
    };
    const insertId = await commentRepository.create(commentary);

    res.status(201).json({ id: insertId });
  } catch (err) {
    next(err);
  }
};

export default { add, browseCommentaryFromOneSerie };
