const emailStrings = require("./emailString");
const usernameStrings = require("./usernameString");
const nicknameStrings = require("./nicknameString");
const pictureUrlStrings = require("./pictureUrlString");
const passwordHelpers = require("./passwords");



module.exports = {
    ...emailStrings,
    ...usernameStrings,
    ...nicknameStrings,
    ...pictureUrlStrings,
    passwordStrengthMap: passwordHelpers.passwordStrengthMap,
    passwordStrengthsArray: passwordHelpers.passwordStrengthsArray,
};
