const authSchemas = require("./auth");
const userSchemas = require("./users");



module.exports = {
    ...authSchemas,
    ...userSchemas,
};
