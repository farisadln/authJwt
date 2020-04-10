const Joi = require('@hapi/joi');


const registerValidation = data => {
    const schema = {
                                name: Joi.string()
                                         .min(1)
                                         .optional()
                                         .allow('')
                                         .required(),
                                email: Joi.string()
                                          .min(6)
                                          .optional()
                                          .allow('')
                                          .required()
                                          .email(),
                                password: Joi.string()
                                             .min(6)
                                             .optional()
                                             .allow('')
                                             .required()
                            };
    return Joi.validate(data, schema);
};


const loginValidation = data => {
                const schema = {
                                     email: Joi.string()
                                               .min(6)
                                               .optional()
                                               .allow('')
                                               .required()
                                               .email(),
                                     password: Joi.string()
                                                  .min(6)
                                                  .optional()
                                                  .allow('')
                                                  .required()

                                 };
                return Joi.validate(data, schema);
        };


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;