const Joi = require("joi");
const {
    lowercase,
    uppercase,
    number,
    specialCharacter,
    noMoreThanTwoDuplicateCharacters,
} = require("./passwordRegexValues");



/*
 * At least:
 * - 10 characters
 * - A lowercase letter
 * - An uppercase letter
 * - A number
 * - A special character
 */
const passwordStringStrengthExcellent = Joi.string()
                                           .min(10)
                                           .regex(lowercase.regex, lowercase.name)
                                           .regex(uppercase.regex, uppercase.name)
                                           .regex(number.regex, number.name)
                                           .regex(specialCharacter.regex, specialCharacter.name)
                                           .regex(noMoreThanTwoDuplicateCharacters.regex, noMoreThanTwoDuplicateCharacters.name);
const passwordStringStrengthExcellentRequired = passwordStringStrengthExcellent.required();



module.exports = {
    passwordStringStrengthExcellent,
    passwordStringStrengthExcellentRequired,
};
