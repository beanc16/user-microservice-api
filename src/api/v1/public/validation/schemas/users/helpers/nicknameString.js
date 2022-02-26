const Joi = require("joi");



const _nicknameRegex = /^[A-Za-z ]+$/;

const nicknameString = Joi.string()
                          .pattern(_nicknameRegex)
                          .min(3)
                          .max(16);
const nicknameStringRequired = nicknameString.required();



module.exports = {
    nicknameString,
    nicknameStringRequired,
};
