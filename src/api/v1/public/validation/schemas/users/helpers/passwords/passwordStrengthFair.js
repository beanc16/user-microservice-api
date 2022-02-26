const Joi = require("joi");
const {
    lowercase,
    uppercase,
    number,
} = require("./passwordRegexValues");



/*
 * At least:
 * - 8 characters
 * - A lowercase letter
 * - An uppercase letter
 * - A number
 */
const passwordStringStrengthFair = Joi.string()
                                      .min(8)
                                      .regex(lowercase.regex, lowercase.name)
                                      .regex(uppercase.regex, uppercase.name)
                                      .regex(number.regex, number.name);
const passwordStringStrengthFairRequired = passwordStringStrengthFair.required();



module.exports = {
    passwordStringStrengthFair,
    passwordStringStrengthFairRequired,
};
