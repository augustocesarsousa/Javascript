class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    talk(){
        console.log(`${this.firstName} ${this.lastName} is talking hello!`);
    }
}

let p1 = new Person('Augusto', 'Sousa');
p1.talk();