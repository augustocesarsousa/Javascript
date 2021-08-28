let names = ["Augusto", "Daniela", "Rafael"];
console.log(names);

names.push("Clarice"); // insert at the end
console.log(names);

names.unshift("Joaquim"); // insert at the begin
console.log(names);

names.pop(); // remove at the end
console.log(names);

names.shift(); // remove at the begin
console.log(names);

delete names[1]; // remove but keeps the index
console.log(names);

console.log(typeof names);
console.log(names instanceof Array);
console.log(names.slice(0,1));