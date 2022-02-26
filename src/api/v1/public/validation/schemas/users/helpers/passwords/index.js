const passwordStrengthsNone = require("./passwordStrengthNone");
const passwordStrengthsLow = require("./passwordStrengthLow");
const passwordStrengthsFair = require("./passwordStrengthFair");
const passwordStrengthsGood = require("./passwordStrengthGood");
const passwordStrengthsExcellent = require("./passwordStrengthExcellent");



module.exports = {
    ...passwordStrengthsNone,
    ...passwordStrengthsLow,
    ...passwordStrengthsFair,
    ...passwordStrengthsGood,
    ...passwordStrengthsExcellent,
}
