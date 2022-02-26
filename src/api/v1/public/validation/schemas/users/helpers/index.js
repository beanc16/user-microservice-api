const emailStrings = require("./emailString");
const usernameStrings = require("./usernameString");
const passwordHelpers = require("./passwords");



module.exports = {
    ...emailStrings,
    ...usernameStrings,
    passwordStrengthMap: passwordHelpers.passwordStrengthMap,
    passwordStrengthsArray: passwordHelpers.passwordStrengthsArray,
};
