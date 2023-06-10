const fibonacci = function(member) {
    let arr = [1, 1];
    let currentNumber = 2;
    if (member < 1) return "OOPS";
    for (i = 2; i < member; i++) {
    arr[currentNumber] = arr[currentNumber - 1] + arr[currentNumber - 2];
    currentNumber += 1;
    };
    return arr[member - 1];
};

// Do not edit below this line
module.exports = fibonacci;
