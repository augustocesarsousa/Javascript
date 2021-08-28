let number1 = 5;
let number2 = 3;
let letter1 = "A";
let letter2 = "B";

console.log(number1 + number2); // sum
console.log(number1 - number2); // subtraction
console.log(number1 * number2); // multiplication
console.log(number1 / number2); // division
console.log(number1 ** number2); // exponentiation

++number1; // pre increment
console.log(number1);
number1++; // post increment
console.log(number1);
--number1; // pre decrement
console.log(number1);
number1--; // post decrement
console.log(number1);

letter2 = "C"; // assingnment
console.log(letter2);

number2 += 10; // increment and assignment (-=, *=, /=, **=)
console.log(number2);

console.log(letter1 + letter2); // concatenation

number1 = parseInt("5.2"); // conversion to integer
console.log(number1);
number1 = parseFloat("5.2"); // conversion to float
console.log(number1);
number1 = Number("5.223"); // conversion to number
console.log(number1);

