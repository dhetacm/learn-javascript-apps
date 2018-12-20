console.log("This is Mathematic Calculator");

const add = (number1, number2) => number1 + number2;
const substract = (number1, number2) => number1 - number2;
const multiply = (number1, number2) => number1 * number2;
const divide = (number1, number2) => number1 / number2;
const modulo = (number1, number2) => number1 % number2;
const power = (number1, number2) => number1 ** number2;

const result_add = (4, 8);
const result_substract = (8, 4);
const result_multiply = multiply(result_add, result_substract);
const result_divide = divide(result_add, result_substract);
const result_modulo = modulo(result_add, result_substract);
const result_power = power(result_add, result_substract);

console.log(result_add);
console.log(result_substract);
console.log(result_multiply);
console.log(result_divide);
console.log(result_modulo);
console.log(result_power);
