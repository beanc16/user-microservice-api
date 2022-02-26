const emailStrings = require("./emailString");
const usernameStrings = require("./usernameString");
const pictureUrlStrings = require("./pictureUrlString");
const passwordHelpers = require("./passwords");



module.exports = {
    ...emailStrings,
    ...usernameStrings,
    ...pictureUrlStrings,
    passwordStrengthMap: passwordHelpers.passwordStrengthMap,
    passwordStrengthsArray: passwordHelpers.passwordStrengthsArray,
};
