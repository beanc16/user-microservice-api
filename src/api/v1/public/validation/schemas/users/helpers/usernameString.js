const Joi = require("joi");



// \w = [A-Za-z0-9_]
const _usernameRegex = /^[\w\-.]+$/;

const usernameString = Joi.string()
                          .pattern(_usernameRegex)
                          .min(3)
                          .max(24);
const usernameStringRequired = usernameString.required();



module.exports = {
    usernameString,
    usernameStringRequired,
};
