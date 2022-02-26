const Joi = require("joi");



// At least 6 characters
const passwordStringStrengthLow = Joi.string()
                                     .min(6);
const passwordStringStrengthLowRequired = passwordStringStrengthLow.required();



module.exports = {
    passwordStringStrengthLow,
    passwordStringStrengthLowRequired,
};
