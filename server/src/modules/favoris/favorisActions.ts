import type { RequestHandler } from "express";
import favorisRepository from "./favorisRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number.parseInt(req.body.user_id);
    const favoris = await favorisRepository.readAllFavoris(userId);
    if (favoris == null) {
      res.sendStatus(404);
    } else {
      res.json(favoris);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const favoris = {
      serie_id: Number.parseInt(req.body.serie_id),
      user_id: req.body.user_id,
    };
    const insertId = await favorisRepository.create(favoris);

    res.status(201).json({ id: insertId });
  } catch (err) {
    next(err);
  }
};

export default { add, browse };
