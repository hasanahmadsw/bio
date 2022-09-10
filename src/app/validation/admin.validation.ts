import * as Joi from "joi";

export const login = Joi.object()
  .keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
  })
  .required();
