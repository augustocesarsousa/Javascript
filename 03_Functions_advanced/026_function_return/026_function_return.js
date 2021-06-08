// return object

function createPerson(firstName, lastName, age){
    return {firstName, lastName, age};
}

let person1 = createPerson('Augusto', 'Sousa', 29);

console.log(person1);

// return other function

function createMultiplicator(multiplicator){
    return function(n){
        return n * multiplicator;
    };
}

let duplicator = createMultiplicator(2);
let triplicator = createMultiplicator(3);
let quadruplicator = createMultiplicator(4);

console.log(duplicator(5));
console.log(triplicator(5));
console.log(quadruplicator(5));
