const convertToCelsius = function(tempFah) {
  let tempCelsius = (tempFah - 32) * 5/9
  return Math.round(tempCelsius * 10) / 10
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFah = tempCelsius * 9/5 + 32
  return Math.round(tempFah * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
