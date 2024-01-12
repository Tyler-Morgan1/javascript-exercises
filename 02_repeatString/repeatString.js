const repeatString = function(ourString, numTimes) {
    if (numTimes < 0) {
        return "ERROR"
    }
    answerString = "";
    for (let i = numTimes; i > 0; i--) {
        answerString += ourString;
    }
    return answerString;
};

// Do not edit below this line
module.exports = repeatString;
