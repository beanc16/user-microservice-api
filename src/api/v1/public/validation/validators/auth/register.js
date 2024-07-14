const { simpleAuthSchema } = require("../../schemas");
const { validateJoiSchema } = require("@beanc16/joi-helpers");



function validateSimpleAuthPayload(payload)
{
    return new Promise(function (resolve, reject)
    {
        validateJoiSchema(simpleAuthSchema, payload)
            .then(function (value)
            {
                resolve(value);
            })
            .catch(function (error)
            {
                reject(error);
            });
    });
}



module.exports = {
    validateSimpleAuthPayload,
};
