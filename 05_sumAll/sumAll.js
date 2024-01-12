const sumAll = function() {
    if (typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number') {
        return "ERROR";
    } else if (arguments[0] <= -1 || arguments[1] <= -1) {
        return "ERROR";
    } else {
        let lower = (arguments[0] <= arguments[1]) ? arguments[0]: arguments[1];
        let higher = (arguments[1] > arguments[0]) ? arguments[1]: arguments[0];
        sum = 0;
        for (let i = lower; i <= higher; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
