const Joi = require("joi");
const { JoiRequired } = require("@beanc16/joi-helpers");
const userSchemas = require("./helpers");



// Register user
const registerUserSchema = JoiRequired.object({
    envs: userSchemas.envsArrayRequired,
    searchName: userSchemas.searchNameStringRequired,
    displayName: userSchemas.displayNameStringRequired,
    data: userSchemas.dataObj,
});



module.exports = {
    registerUserSchema,
};
