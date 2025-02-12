import type { RequestHandler } from "express";
import seasonRepository from "./seasonRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const season = await seasonRepository.readAll();
    res.json(season);
  } catch (err) {
    next(err);
  }
};

const readAllSeasonsFromOneSerie: RequestHandler = async (req, res, next) => {
  try {
    const serieId = Number.parseInt(req.params.id);
    const seasons = await seasonRepository.readAllSeasons(serieId);

    if (seasons == null) {
      res.sendStatus(404);
    } else {
      res.json(seasons);
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const season = {
      id: Number.parseInt(req.params.id),
      title: req.body.title,
      number: req.body.number,
      year: req.body.year,
      serie_id: req.body.serie_id,
    };
    const affectedRows = await seasonRepository.update(season);
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const insertId = await seasonRepository.create(req.body);

    res.status(201).json({ id: insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const seasonId = Number.parseInt(req.params.id);
    await seasonRepository.delete(seasonId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default {
  browse,
  edit,
  add,
  destroy,
  readAllSeasonsFromOneSerie,
};
