
const sumAll = function(int1, int2) {
    let sum = 0;
    let smallInt = 0;
    let largeInt = 0;

    if (int1 < 0 || int2 < 0) {
        return "ERROR";
    } else if (typeof int1 !== typeof 1 || typeof int2 !== typeof 1) {
        return "ERROR";
    }

    if (int1 < int2) {
        smallInt = int1;
        largeInt = int2;
    } else if (int2 < int1) {
        smallInt = int2;
        largeInt = int1;
    } else {
        return "ERROR";
    }

    for (let i = smallInt; i <= largeInt; i++) {
        sum += i;
    };

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
