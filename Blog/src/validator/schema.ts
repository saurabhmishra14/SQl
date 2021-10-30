import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const schemas = {
  blogPOST: Joi.object().keys({
    title: Joi.string().min(4).required(),
    description: Joi.string().min(4).required(),
  }),
  blogPOST1: Joi.object().keys({
    title: Joi.string().min(4),
    description: Joi.string().min(4),
  }),
  blogID: Joi.object().keys({
    blogID: Joi.number().required(),
  }),
  userINFO: Joi.object().keys({
    userName: Joi.string().min(4).required(),
    password: passwordComplexity().required(),
    email: Joi.string().min(4).required(),
    firstName: Joi.string().min(4).required(),
    lastName: Joi.string().required(),
  }),
  bookINFO: Joi.object().keys({
    bookName: Joi.string().min(3).required(),
    authorName: Joi.string().min(3).required(),
    bookSummary: Joi.string().min(4).required()
  }),
  bookINFO1: Joi.object().keys({
    bookName: Joi.string().min(3),
    authorName: Joi.string().min(3),
    bookSummary: Joi.string().min(4)
  })
};

export default schemas;
