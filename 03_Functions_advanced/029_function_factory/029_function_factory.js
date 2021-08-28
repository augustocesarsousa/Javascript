function createPerson(name, age, height, weight){
    return {
        name,
        age,
        height,
        weight,

        get introYourself(){
            return `My name is ${this.name}, I'm ${this.age} years old, I'm ${this.height} tall and I weight ${this.weight}`
        },

        get imc(){
            return (weight / (height ** 2)).toFixed(2);
        },

        get speak(){
            return `${this.name} is speaking hello!`
        }
    }
}

let p1 = createPerson('João', 42, 1.80, 90);

console.log(p1.introYourself);
console.log(p1.imc);
console.log(p1.speak);