import type { RequestHandler } from "express";
import Joi from "joi";

export const validateDataFormUser: RequestHandler = async (req, res, next) => {
  const dataSchema = Joi.object({
    lastname: Joi.string()
      .max(100)
      .required()
      .pattern(/^[A-Za-zÀ-ÿ\s-]+$/),
    firstname: Joi.string()
      .max(100)
      .required()
      .pattern(/^[A-Za-zÀ-ÿ\s-]+$/),
    password: Joi.string()
      .max(255)
      .required()
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
      ),
    email: Joi.string().max(150).required(),
  });
  const { error } = dataSchema.validate(req.body, { abortEarly: false });
  if (error == null) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};

export const validateDataFormSerie: RequestHandler = async (req, res, next) => {
  const dataSchema = Joi.object({
    title: Joi.string()
      .max(255)
      .required()
      .pattern(/^[A-Za-zÀ-ÿ\s-]+$/),
    author: Joi.string()
      .max(150)
      .required()
      .pattern(/^[A-Za-zÀ-ÿ\s-]+$/),
    synopsis: Joi.string().required(),
    picture: Joi.string().max(250).required(),
  });
  const { error } = dataSchema.validate(req.body, { abortEarly: false });
  if (error == null) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};

export const validateDataFormFromComment: RequestHandler = async (
  req,
  res,
  next,
) => {
  const dataSchema = Joi.object({
    comment: Joi.string().required(),
    user_id: Joi.number().required(),
    id: Joi.string().required(),
  });

  const { error } = dataSchema.validate(req.body, { abortEarly: false });
  if (error == null) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};
