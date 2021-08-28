// classic for

console.log(`Classic for`);
console.log(``);

let colors = ["red", "green", "blue", "yellow"];

for(let i = 1; i < colors.length; i++){
    console.log(colors[i]);
}

// for in

console.log(``);
console.log(`For in`);
console.log(``);

for(let i in colors){
    console.log(colors[i]);
}

// for of

console.log(``);
console.log(`For of`);
console.log(``);

for(let value of colors){
    console.log(value);
}

// for each

console.log(``);
console.log(`For each`);
console.log(``);

colors.forEach(function(e){
    console.log(e);
})