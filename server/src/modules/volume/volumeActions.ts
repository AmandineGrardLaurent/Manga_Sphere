import type { RequestHandler } from "express";
import volumeRepository from "./volumeRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const volume = await volumeRepository.readAll();
    res.json(volume);
  } catch (err) {
    next(err);
  }
};

const readAllVolumesFromOneSerie: RequestHandler = async (req, res, next) => {
  try {
    const serieId = Number.parseInt(req.params.id);
    const volume = await volumeRepository.readAllVolume(serieId);

    if (volume == null) {
      res.sendStatus(404);
    } else {
      res.json(volume);
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const volume = {
      id: Number.parseInt(req.params.id),
      title: req.body.title,
      number: req.body.number,
      serie_id: req.body.serie_id,
    };
    const affectedRows = await volumeRepository.update(volume);
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
    const insertId = await volumeRepository.create(req.body);

    res.status(201).json({ id: insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const volumeId = Number.parseInt(req.params.id);
    await volumeRepository.delete(volumeId);
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
  readAllVolumesFromOneSerie,
};
