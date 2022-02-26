const passwordStrengthsNone = require("./passwordStrengthNone");
const passwordStrengthsLow = require("./passwordStrengthLow");
const passwordStrengthsFair = require("./passwordStrengthFair");
const passwordStrengthsGood = require("./passwordStrengthGood");
const passwordStrengthsExcellent = require("./passwordStrengthExcellent");



module.exports = {
    none: {
        optional: passwordStrengthsNone.passwordStrengthNone,
        required: passwordStrengthsNone.passwordStringStrengthNoneRequired,
    },
    low: {
        optional: passwordStrengthsLow.passwordStringStrengthLow,
        required: passwordStrengthsLow.passwordStringStrengthLowRequired,
    },
    fair: {
        optional: passwordStrengthsFair.passwordStringStrengthFair,
        required: passwordStrengthsFair.passwordStringStrengthFairRequired,
    },
    good: {
        optional: passwordStrengthsGood.passwordStringStrengthGood,
        required: passwordStrengthsGood.passwordStringStrengthGoodRequired,
    },
    excellent: {
        optional: passwordStrengthsExcellent.passwordStringStrengthExcellent,
        required: passwordStrengthsExcellent.passwordStringStrengthExcellentRequired,
    },
}
