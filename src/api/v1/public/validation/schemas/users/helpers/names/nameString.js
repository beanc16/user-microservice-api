const Joi = require("joi");



const _nameRegex = /^[A-Za-z]+$/;

const nameString = Joi.string()
                      .pattern(_nameRegex)
                      .min(1)
                      .max(24);
const nameStringRequired = nameString.required();



module.exports = {
    nameString,
    nameStringRequired,
};
