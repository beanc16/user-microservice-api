const Joi = require("joi");
const {
    JoiRequired,
    envsArrayRequired,
    dataObj,
} = require("@beanc16/joi-helpers");
const userSchemas = require("./helpers");



/*
 * TODO:
 * - Get password strength level via GET request to app microservice, then add it to the schema with passwordStrengthMap
 */

// Register user
const registerUserSchema = JoiRequired.object({
    envs: envsArrayRequired,
    email: userSchemas.emailStringRequired,
    username: userSchemas.usernameStringRequired,
    password: userSchemas.passwordStrengthMap.none.required,
    /*
    legalName: {
        first: "",
        middle: "",
        last: ""
    },
    chosenName: {
        first: "",
        middle: "",
        last: ""
    },
    nickname: "",
    */
    pictureUrl: userSchemas.pictureUrlString,
    data: dataObj,
})
.or("username", "email");   // Require username OR email

const registerSchema = JoiRequired.object({
    // TODO: App
    app: JoiRequired.object(),
    user: registerUserSchema,
});



module.exports = {
    registerSchema,
};
