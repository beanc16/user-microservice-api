const Joi = require("joi");



const emailString = Joi.string().email();
const emailStringRequired = emailString.required();



module.exports = {
    emailString,
    emailStringRequired,
};
