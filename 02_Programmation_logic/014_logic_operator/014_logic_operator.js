/**
 * && AND
 * || OR
 * !  NOT
 */

 const NUM1 = 10;
 const NUM2 = 9;

console.log(`(${NUM1} > ${NUM2}) && (${NUM2} < ${NUM1}) = ${(NUM1 > NUM2) && (NUM2 < NUM1)}`);
console.log(`(${NUM1} > ${NUM2}) && (${NUM1} < ${NUM2}) = ${(NUM1 > NUM2) && (NUM1 < NUM2)}`);
console.log(`(${NUM1} > ${NUM2}) || (${NUM1} < ${NUM2}) = ${(NUM1 > NUM2) || (NUM1 < NUM2)}`);
console.log(`(${NUM1} < ${NUM2}) || (${NUM2} > ${NUM1}) = ${(NUM1 < NUM2) || (NUM2 > NUM1)}`);
console.log(`!(${NUM1} > ${NUM2}) && (${NUM1} < ${NUM2}) = ${!(NUM1 > NUM2) && (NUM1 < NUM2)}`);
console.log(`!((${NUM1} > ${NUM2}) && (${NUM1} < ${NUM2})) = ${!((NUM1 > NUM2) && (NUM1 < NUM2))}`);


