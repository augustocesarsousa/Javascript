// declaring object
function createPerson(firstName, lastName, age){
    return {
        firstName,
        lastName,
        age
    }
}

// creating object
let person1 = createPerson("Augusto", "Sousa", 28);
let person2 = createPerson("Daniela", "Sousa", 32);
let person3 = createPerson("Rafael", "Sousa", 7);
let person4 = createPerson("Maria", "Sousa", 64);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

// object with function

let person5 = {
    firstName: "Joaquim",
    age: 72,

    presentation(){
        console.log(`My name is ${this.firstName} and I'm ${this.age} years old!`)
    }
};

person5.presentation();
