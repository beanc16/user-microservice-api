const Joi = require("joi");
const { JoiRequired } = require("@beanc16/joi-helpers");
const { nameString, nameStringRequired } = require("./nameString");



const nameObj = Joi.object({
    prefix: nameString,
    first: nameStringRequired,
    middle: Joi.array()
               .items(nameString)
               .min(1)              // At least one middle name
               .max(18),            // No more than 18 middle names
    last: nameStringRequired,
    suffix: nameString,
});
const nameObjRequired = nameObj.required();



module.exports = {
    nameObj,
    nameObjRequired,
};
