const convertToCelsius = function(tempInFarenheit) {
  let tempInCelsius = (tempInFarenheit-32)*(5/9)
  return Math.round(tempInCelsius * 10) / 10
};

const convertToFahrenheit = function(tempInCelsius) {
  let tempInFarenheit = (tempInCelsius*(9/5)+32)
  return Math.round(tempInFarenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
