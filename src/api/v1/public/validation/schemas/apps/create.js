const Joi = require("joi");
const {
    JoiRequired,
} = require("@beanc16/joi-helpers");
const userSchemas = require("./helpers");
const { passwordStrengthsArray } = require("../users/helpers");



const createAppSchema = JoiRequired.object({
    app: JoiRequired.object({
        data: {
            passwordStrength: JoiRequired.string().valid(...passwordStrengthsArray),
        }
    }),
});



module.exports = {
    createAppSchema,
};
