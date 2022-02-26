const emailStrings = require("./emailString");
const usernameStrings = require("./usernameString");
const nicknameStrings = require("./nicknameString");
const pictureUrlStrings = require("./pictureUrlString");
const passwordHelpers = require("./passwords");
const nameHelpers = require("./names");



module.exports = {
    ...emailStrings,
    ...usernameStrings,
    ...nicknameStrings,
    ...pictureUrlStrings,
    ...nameHelpers,
    passwordStrengthMap: passwordHelpers.passwordStrengthMap,
    passwordStrengthsArray: passwordHelpers.passwordStrengthsArray,
};
