const reverseString = function(givenString) {
    let reversedString = '';
    for (let i = givenString.length - 1; i >= 0; i--) {
        reversedString += givenString[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
