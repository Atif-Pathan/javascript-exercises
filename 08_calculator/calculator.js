const add = function(a , b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(array) {
  let prod = 1;
  array.forEach(element => {
    prod *= element;
  });
  return prod;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(x) {
	let fact = 1;
  for (let index = 1; index < x + 1; index++) {
    fact *= index;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
