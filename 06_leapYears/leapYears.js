const leapYears = function() {
    if (arguments[0] % 400 === 0) {
        return true;
    } else if (arguments[0] % 100 === 0) {
        // do nothing since return false is already out side of else-if, but this prevents returning true in this case
    } else if (arguments[0] % 4 === 0) {
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = leapYears;
