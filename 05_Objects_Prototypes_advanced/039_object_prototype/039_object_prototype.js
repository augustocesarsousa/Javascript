function Person(fistName, lastName, age){
    this.fistName = fistName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.hello = function(){
    return `${this.fistName} ${this.lastName} is talking hello!`;
}

let p1 = new Person('Augusto', 'Cesar', 29);
let p2 = new Person('Daniela', 'Rosa', 31);

console.log(p1.hello());
console.log(p2.hello());