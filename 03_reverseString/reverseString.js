const reverseString = function(input) {
    let inputLength = input.length
    let letterArray = [];
    for (i = 0; i < inputLength; i++) {
        letterArray.unshift(input.slice(i,(i+1)));
    }
    let reversedString = letterArray.join("")
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
