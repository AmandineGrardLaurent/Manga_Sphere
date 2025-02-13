import type { RequestHandler } from "express";
import { decodeToken } from "../../services/jwt/jwt.helper";
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
    const user = await userRepository.checkUniqueEmail(req.body.email);

    if (user.length !== 0) {
      res.sendStatus(422);
      return;
    }
    next();
  } catch (e) {
    next(e);
  }
};

export const getUserByEmail: RequestHandler = async (
  req,
  res,
  next,
): Promise<void> => {
  try {
    const { email } = req.body;
    const user: UserType | null = await userRepository.readByEmail(email);
    if (!email) {
      res.status(400).json({
        message: "Le champ email est requis.",
      });
    }

    if (!user) {
      res.status(404).json({
        message: "Le couple email / mot de passe est incorrect.",
      });
      return;
    }

    req.body.dbpassword = user.password;

    next();
  } catch (e) {
    next(e);
  }
};

const addUserByTokenEmailForComment: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const decodedToken = (await decodeToken(
      req.cookies?.auth_token,
    )) as PayloadType;
    if (!decodedToken) {
      res.status(403).json({ message: "Accès refusé" });
      return;
    }
    const user: { user_id: number } | null =
      await userRepository.readByEmailForComment(decodedToken?.email);
    if (!user) {
      res.status(404).json({ message: "Utilisateur non reconnu" });
      return;
    }
    req.body.user_id = user.user_id;
    next();
  } catch (err) {
    next(err);
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
  addUserByTokenEmailForComment,
};
