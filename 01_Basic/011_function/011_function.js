// no return function 

function hello(){
    console.log("Hello Word!");
}

hello();

// return function

function hello2(){
    return "Hello Word";
}

let msg = hello2();

console.log(msg);

// function with parameters

function sum(num1 , num2){
    return num1 + num2;
}

let result = sum(2,3);

console.log(result);

// arrow function

/*
function root(n){
  return n ** 0.5;
}
*/

let root = n => n ** 0.5;

console.log(root(9));