import type { RequestHandler } from "express";
import userRepository from "./userRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const user = await userRepository.readAll();
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number.parseInt(req.params.id);
    const user = await userRepository.read(userId);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const user = {
      id: Number.parseInt(req.params.id),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      role_id: req.body.role_id,
    };
    const affectedRows = await userRepository.update(user);

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
    const insertId = await userRepository.create(req.body);
    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number.parseInt(req.params.id);
    await userRepository.delete(userId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

// waiting users
const browseWaitingUsers: RequestHandler = async (req, res, next) => {
  try {
    const user = await userRepository.readAllWaitingUsers();
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const editWaitingUser: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number.parseInt(req.params.id);

    const affectedRows = await userRepository.updateWaitingUser(userId);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

// accepted users
const browseAcceptedUsers: RequestHandler = async (req, res, next) => {
  try {
    const user = await userRepository.readAllAcceptedUsers();
    res.json(user);
  } catch (err) {
    next(err);
  }
};

// vérification de l'existence ou non de l'email dans la BDD
const verifyEmailExists: RequestHandler = async (req, res, next) => {
  try {
    const user = await userRepository.findUserByEmail(req.body.email);

    if (user.length !== 0) {
      res.sendStatus(422);
      return;
    }
    next();
  } catch (e) {
    next(e);
  }
};

export default {
  browse,
  read,
  edit,
  add,
  destroy,
  verifyEmailExists,
  browseWaitingUsers,
  editWaitingUser,
  browseAcceptedUsers,
};
