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
    data: dataObj,
    email: userSchemas.emailStringRequired,
});



module.exports = {
    registerUserSchema,
};
