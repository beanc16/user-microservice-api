const basicAppSchemas = require("./basicApp");
const createSchemas = require("./create");



module.exports = {
    ...basicAppSchemas,
    ...createSchemas,
};