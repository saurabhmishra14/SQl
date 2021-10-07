import Joi from 'joi';

const schemas = {
  blogPOST: Joi.object().keys({
    title: Joi.string().min(4).required(),
    description: Joi.string().min(4).required()
  }),
  blogID: Joi.object().keys({
    blogID: Joi.number().required()
  })
};
export default schemas;