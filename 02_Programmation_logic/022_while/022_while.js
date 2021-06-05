function random(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

let min = 1;
let max = 10;
let range = random(min,max);

// while

while(range !== 5){
    console.log(range);
    range = random(min,max);
}

console.log(``);
console.log(`=============`);
console.log(``);

// do while

do{
    console.log(range);
    range = random(min,max);
}while(range !== 5);