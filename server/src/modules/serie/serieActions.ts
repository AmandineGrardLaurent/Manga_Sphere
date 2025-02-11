import type { RequestHandler } from "express";
import serieRepository from "./serieRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const serie = await serieRepository.readAll();
    res.json(serie);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const serieId = Number.parseInt(req.params.id);
    const serie = await serieRepository.read(serieId);
    if (serie == null) {
      res.sendStatus(404);
    } else {
      res.json(serie);
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const serie = {
      id: Number.parseInt(req.params.id),
      title: req.body.title,
      synopsis: req.body.synopsis,
      author: req.body.author,
      picture: req.body.picture,
    };
    const affectedRows = await serieRepository.update(serie);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const insertId = await serieRepository.create(req.body);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const serieId = Number.parseInt(req.params.id);
    await serieRepository.delete(serieId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { add, browse, read, edit, destroy };
