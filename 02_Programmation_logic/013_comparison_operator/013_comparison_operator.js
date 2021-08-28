/**
 * > bigger
 * < smaller
 * >= bigger and equal
 * <= smaller and equal
 * == equal (only value)
 * === equal (value and type)
 * != different (only value)
 * !== different (value and type)
 */

const NUM1 = 10;
const NUM2 = 9;
const TXT1 = "10";

console.log(`${NUM1} > ${NUM2} = ${NUM1 > NUM2}`);
console.log(`${NUM1} < ${NUM2} = ${NUM1 < NUM2}`);
console.log(`${NUM1} >= ${NUM2} = ${NUM1 >= NUM2}`);
console.log(`${NUM1} <= ${NUM2} = ${NUM1 <= NUM2}`);
console.log(`${NUM1} == "${TXT1}" = ${NUM1 == TXT1}`);
console.log(`${NUM1} === "${TXT1}" = ${NUM1 === TXT1}`);
console.log(`${NUM1} != "${TXT1}" = ${NUM1 != TXT1}`);
console.log(`${NUM1} !== "${TXT1}" = ${NUM1 !== TXT1}`);