

const findTheOldest = function(array) {
    const oldest = array.sort(function(a,b) {
        const firstPerson = getAge(a.yearOfBirth, a.yearOfDeath)
        const nextPerson = getAge(b.yearOfBirth, b.yearOfDeath)
        return firstPerson > nextPerson ? 1 : -1;
    });
    return oldest[oldest.length-1]
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};


// Do not edit below this line
module.exports = findTheOldest;