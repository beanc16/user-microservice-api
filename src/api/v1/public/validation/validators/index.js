const authValidators = require("./auth");
const userValidators = require("./users");



module.exports = {
    ...authValidators,
    ...userValidators,
};
