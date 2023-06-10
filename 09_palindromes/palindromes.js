
function formatInput (palindrome) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const singleLetters = palindrome.split("");
    const singleLettersLowerCase = singleLetters.map(singleLetters => singleLetters.toLowerCase());
    const filteredLetters = singleLettersLowerCase.filter(singleLettersLowerCase => alphabet.includes(singleLettersLowerCase));
    return filteredLetters;
}

function makeEven (value) {
    if (value.length % 2 === 0){
        return 0;
    } else {
        let middleCharacter = Math.floor(value.length / 2);
        return middleCharacter;
    };
}

function getEvenArray (palindrome) {
    let filteredLetters = formatInput (palindrome);
    let middleCharacter = makeEven (filteredLetters);
    if (middleCharacter > 0) {
        filteredLetters.splice(middleCharacter, 1);
    }
    return filteredLetters;
};

function splitArrayInHalf (palindrome) {
    let evenArray = getEvenArray (palindrome);
    let firstHalf = evenArray.slice(0, evenArray.length / 2);
    let secondHalfUnreversed = evenArray.slice (evenArray.length / 2);
    let secondHalf = secondHalfUnreversed.reverse();
    let bothHalfs = [firstHalf, secondHalf]
    return bothHalfs
};


function arrayEquals(a, b) {
    return a.every((val, index) => val === b[index]);
};


const palindromes = function (palindrome) {
    bothHalfs = splitArrayInHalf (palindrome);
    return arrayEquals (bothHalfs[0], bothHalfs[1]);
};

// Do not edit below this line
module.exports = palindromes;