const { registerUserSchema } = require("../../schemas");
const { validateJoiSchema } = require("@beanc16/joi-helpers");



function validateRegisterUserPayload(payload)
{
    return new Promise(function (resolve, reject)
    {
        validateJoiSchema(registerUserSchema, payload)
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
    validateRegisterUserPayload,
};
