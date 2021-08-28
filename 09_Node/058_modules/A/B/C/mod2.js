module.exports = class Dog{
    constructor(name){
        this.name = name;
    }

    bark(){
        return `${this.name} is au au!!!`;
    }

}

console.log(__filename);
console.log(__dirname);