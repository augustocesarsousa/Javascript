function Person(name, age, height, weight){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;

    this.introYourself = () => {
        console.log(`My name is ${this.name}, I'm ${this.age} years old, I'm ${this.height} tall and I weight ${this.weight}`);
    };

    this.imc = () => {
        console.log(`My IMC is ${(this.weight / (this.height ** 2)).toFixed(2)}`);
    }

    this.speak = () => {
        console.log(`${this.name} is speaking hello!`);
    }
}

let p1 = new Person('João', 42, 1.80, 90);

p1.introYourself();
p1.imc();
p1.speak();