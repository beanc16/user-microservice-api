const Joi = require("joi");
const { JoiRequired } = require("@beanc16/joi-helpers");



const simpleAuthSchema = JoiRequired.object({
    calledBy: JoiRequired.string().min(1),
    expiresInSeconds: Joi.number().min(1).optional(),
});



module.exports = {
    simpleAuthSchema,
};
