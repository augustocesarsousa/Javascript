let numbers = [2,11,43,55,66,3,4,634,6,88,9,76,5,20];
let sumNumbers;

sumNumbers = numbers.reduce(function(acm, value){
    acm += value;
    return acm;
}, 0);

console.log(sumNumbers);

let people = [
    {name: 'Augusto', age: 29},
    {name: 'Daniela', age: 31},
    {name: 'Rafael', age: 7},
    {name: 'Maria', age: 62},
    {name: 'Joaquim', age: 72},
];
let olderPerson;

olderPerson = people.reduce(function(acm, obj){
    if(acm.age > obj.age) return acm;
    return obj;
})

console.log(olderPerson);