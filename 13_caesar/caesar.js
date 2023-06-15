

const caesar = function(word, number) {
    let charCodeNumbers = [];
    for (i = 0; i < word.length; i++) {
        charCodeNumbers[i] = word.charCodeAt(i);
    };
    newCharCodeNumbers = charCodeNumbers.map(character => character + number);
    let caesarArray = newCharCodeNumbers.map(character => String.fromCharCode(character));
    let finalString = caesarArray.join('');
    return finalString;
};

const caesar = function(word, number) {
    return word
        .split("");
        .map(character => shift(character, number));
        .join("");
    
    shift(character, number) {
        let unicode = character.charCodeAt();
        newUnicode = unicode.map(character => {
            if ((character + number) > )
            character + number
        });
    }
}



    };
    newCharCodeNumbers = charCodeNumbers.map(character => character + number);
    let caesarArray = newCharCodeNumbers.map(character => String.fromCharCode(character));
    let finalString = caesarArray.join('');
    return finalString;
};


// Do not edit below this line
module.exports = caesar;
