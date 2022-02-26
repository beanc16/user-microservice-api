const lowercaseRegex = /^[a-z]+$/;
const uppercaseRegex = /^[A-Z]+$/;
const numberRegex = /^[0-9]+$/;
const specialCharacterRegex = /^[\-_!@#$%^&*()+=,.<>?\/:;"'\{\}\[\]|\\`~]+$/;
// For help with the below, see: https://stackoverflow.com/questions/16717656/regex-no-more-than-2-identical-consecutive-characters-and-a-z-and-0-9
const noMoreThanTwoDuplicateCharactersRegex = /^(([\w\-!@#$%^&*()+=,.<>?\/:;"'\{\}\[\]|\\`~ ])\2?(?!\2))+$/;



module.exports = {
    lowercase: {
        regex: lowercaseRegex,
        name: "lower-case",
    },
    uppercase: {
        regex: uppercaseRegex,
        name: "upper-case",
    },
    number: {
        regex: numberRegex,
        name: "number",
    },
    specialCharacter: {
        regex: specialCharacterRegex,
        name: "special-character",
    },
    noMoreThanTwoDuplicateCharacters: {
        regex: noMoreThanTwoDuplicateCharactersRegex,
        name: "no-more-than-two-duplicate-characters",
    }
};
