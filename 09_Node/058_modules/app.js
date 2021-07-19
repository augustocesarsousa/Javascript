let mod1 = require('./mod');
let Dog = require('./A/B/C/mod2');

console.log(mod1.fullName());

let dog = new Dog('Caramelo');
console.log(dog.bark());