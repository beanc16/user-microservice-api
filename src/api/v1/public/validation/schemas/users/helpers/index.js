const emailStrings = require("./emailString");
const usernameStrings = require("./usernameString");
const passwordStrengthMap = require("./passwords");



module.exports = {
    ...emailStrings,
    ...usernameStrings,
    passwordStrengthMap,
};
