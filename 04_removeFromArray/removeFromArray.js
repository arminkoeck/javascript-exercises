
const removeFromArray = function(array, ...input) {
    
    let newArray = array.filter(function(el) {
      return input.indexOf(el) < 0;
    });
    return newArray
}

// Do not edit below this line
module.exports = removeFromArray;
