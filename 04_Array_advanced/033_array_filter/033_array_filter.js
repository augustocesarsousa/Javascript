let numbers = [2,11,43,55,66,3,4,634,6,88,9,76,5,20];
let numberFilter;

// with function
numberFilter = numbers.filter(filterNumber);
console.log(numberFilter);

function filterNumber(value){
    return value > 40;
}

// with arrow function
numberFilter = numbers.filter(value => value < 40);
console.log(numberFilter);

// with objects
let people = [
    {name: 'Augusto', age: 29},
    {name: 'Daniela', age: 31},
    {name: 'Rafael', age: 7},
    {name: 'Maria', age: 62},
    {name: 'Joaquim', age: 72},
];
let peopleFilter;

peopleFilter = people.filter(obj => obj.age > 30);
console.log(peopleFilter);

peopleFilter = people.filter(obj => obj.name.toLowerCase().endsWith('a'));
console.log(peopleFilter);
