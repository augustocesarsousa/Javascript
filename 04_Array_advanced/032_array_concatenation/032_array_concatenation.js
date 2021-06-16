let array1 = [1,2,3];
let array2 = [4,5,6];
let array3;

// with concat
array3 = array1.concat(array2);
console.log(array3);

// with spread
array3 = [...array1, ...array2];
console.log(array3);

array3 = [...array1, ...array2, 'banana', 'apple', ...[7,8,9]];
console.log(array3);
