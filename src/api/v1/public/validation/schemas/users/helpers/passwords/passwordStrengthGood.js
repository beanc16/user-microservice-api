const Joi = require("joi");
const {
    lowercase,
    uppercase,
    number,
    specialCharacter,
} = require("./passwordRegexValues");



/*
 * At least:
 * - 8 characters
 * - A lowercase letter
 * - An uppercase letter
 * - A number
 * - A special character
 */
const passwordStringStrengthGood = Joi.string()
                                      .min(8)
                                      .regex(lowercase.regex, lowercase.name)
                                      .regex(uppercase.regex, uppercase.name)
                                      .regex(number.regex, number.name)
                                      .regex(specialCharacter.regex, specialCharacter.name);
const passwordStringStrengthGoodRequired = passwordStringStrengthGood.required();



module.exports = {
    passwordStringStrengthGood,
    passwordStringStrengthGoodRequired,
};
