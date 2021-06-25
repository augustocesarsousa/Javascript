class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(value){
        value = value.split(' ');
        this.firstName = value.shift();
        this.lastName = value.join(' ');
    }
}

let p1 = new Person('Augusto', 'Sousa');
console.log(p1.fullName);

p1.fullName = 'Zebrunildo Lindo Sousa';
console.log(p1.firstName);
console.log(p1.lastName);

// With symbol

const _velocity = Symbol('velocity');

class Car{
    constructor(name){
        this.name = name;
        this[_velocity] = 0;
    }

    set velocity(value){
        if(typeof value !== 'number') return;
        if(value > 300 || value < 0) return;
        this[_velocity] = value;
    }

    get velocity(){
        return this[_velocity];
    }

    accelerate(){
        if(this[_velocity] >= 300) return;
        this[_velocity]++;
    }

    brake(){
        if(this[_velocity] <= 0) return;
        this[_velocity]--;
    }
}

let car1 = new Car('Mustang');

for(let i = 0; i <= 450; i++){
    car1.accelerate();
}

console.log(car1.name);
console.log(car1.velocity);