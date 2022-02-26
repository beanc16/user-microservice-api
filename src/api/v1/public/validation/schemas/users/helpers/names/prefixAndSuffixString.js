const Joi = require("joi");



const _prefixAndSuffixRegex = /^[A-Za-z.]+$/;

const prefixAndSuffixString = Joi.string()
                                 .pattern(_prefixAndSuffixRegex)
                                 .min(1)
                                 .max(24);
const prefixAndSuffixStringRequired = prefixAndSuffixString.required();



module.exports = {
    prefixAndSuffixString,
    prefixAndSuffixStringRequired,
};
