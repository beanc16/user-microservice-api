const Joi = require("joi");



// At least one character
const passwordStringStrengthNone = Joi.string()
                                      .min(1);
const passwordStringStrengthNoneRequired = passwordStringStrengthNone.required();



module.exports = {
    passwordStringStrengthNone,
    passwordStringStrengthNoneRequired,
};
