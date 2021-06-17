let numbers = [2,11,43,55,66,3,4,634,6,88,9,76,5,20];
let sum = 0;

numbers.forEach(value => console.log(value));

// reduce with forEach

numbers.forEach(value => sum += value);
console.log(sum);
