const Joi = require("joi");
const {
    JoiRequired,
} = require("@beanc16/joi-helpers");



const basicAppSchema = JoiRequired.object();



module.exports = {
    basicAppSchema,
};
