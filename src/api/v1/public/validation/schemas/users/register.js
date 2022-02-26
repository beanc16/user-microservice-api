const Joi = require("joi");
const {
    JoiRequired,
    envsArrayRequired,
    dataObj,
} = require("@beanc16/joi-helpers");
const userSchemas = require("./helpers");



/*
 * TODO:
 * - Require email OR username
 */

// Register user
const registerUserSchema = JoiRequired.object({
    envs: envsArrayRequired,
    email: userSchemas.emailStringRequired,
    username: userSchemas.usernameStringRequired,
    /*
    password: "",
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
    pictureUrl: "",
    */
    data: dataObj,
});

const registerSchema = JoiRequired.object({
    // TODO: App
    app: JoiRequired.object(),
    user: registerUserSchema,
});



module.exports = {
    registerSchema,
};
