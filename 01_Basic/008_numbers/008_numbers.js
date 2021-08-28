let number1 = 10.6646648;

console.log(number1);
console.log(parseInt(number1));
console.log(typeof number1);
console.log(typeof number1.toString());
console.log(number1.toString(2));
console.log(number1.toString(10));
console.log(number1.toString(16));
console.log(number1.toFixed(2));
console.log(Number.isInteger(number1))
console.log(Number.isInteger(parseInt(number1)));

// IEEE 754.2008

let number2 = 0.7;
let number3 = 0.1;

console.log(number2 + number3);

number2 += number3; // 0.7999999
number2 += number3; // 0.8999999
number2 += number3; // 0.9999999
console.log(number2);

number2 = Number(number2.toFixed(2)); // 1
console.log(number2);


