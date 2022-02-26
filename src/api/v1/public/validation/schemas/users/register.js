const Joi = require("joi");
const {
    JoiRequired,
    envsArrayRequired,
    dataObj,
} = require("@beanc16/joi-helpers");
const userSchemas = require("./helpers");
const { basicAppSchema } = require("../apps");



/*
 * TODO:
 * - Get password strength level via GET request to app microservice, then add it to the schema with passwordStrengthMap
 */

// Register user
const registerUserSchema = JoiRequired.object({
    envs: envsArrayRequired,
    email: userSchemas.emailString,
    username: userSchemas.usernameString,
    password: userSchemas.passwordStrengthMap.none.required,
    legalName: userSchemas.nameObj,
    chosenName: userSchemas.nameObj,
    nickname: userSchemas.nicknameString,
    pictureUrl: userSchemas.pictureUrlString,
    data: dataObj,
})
.or("username", "email");   // Require username OR email

const registerSchema = JoiRequired.object({
    app: basicAppSchema,
    user: registerUserSchema,
});



module.exports = {
    registerSchema,
};
