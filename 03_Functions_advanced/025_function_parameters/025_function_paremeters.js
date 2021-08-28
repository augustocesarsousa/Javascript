
// arguments

function fucntion1(){
    console.log(arguments);
}

fucntion1('a', 1, '+', true, 'bbb');

// operator ...

const FUNCTION2 = (...args) => {
    console.log(args);
};

FUNCTION2('a', 'b', 1, 2, 3);

function function3 (operator, acumulator, ...numbers){
    for(let number of numbers){
        if(operator === '+') acumulator += number;
        if(operator === '-') acumulator -= number;
        if(operator === '*') acumulator *= number;
        if(operator === '/') acumulator /= number;
    }

    console.log(acumulator);
}

function3('+', 0, 10, 20, 30, 40, 50);
function3('-', 0, 10, 20, 30, 40, 50);
function3('*', 1, 10, 20, 30, 40, 50);
function3('/', 1, 10, 20, 30, 40, 50);