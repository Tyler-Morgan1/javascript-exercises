const removeFromArray = function() {
    argumentsArray = Array.from(arguments);
    console.log(argumentsArray[0].filter((arg) => !argumentsArray.slice(1).includes(arg)));
    return argumentsArray[0].filter((arg) => !argumentsArray.slice(1).includes(arg));
};

// Do not edit below this line
module.exports = removeFromArray;
