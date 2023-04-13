const convertToCelsius = function(fahrenheit) {
  let newTemp = (fahrenheit - 32) / (9/5);
  return +(newTemp.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let newTemp = celsius * (9/5) + 32;
  return +(newTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
