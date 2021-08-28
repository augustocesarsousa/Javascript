let numbers = [2,11,43,55,66,3,4,634,6,88,9,76,5,20];
let newNumbers;

newNumbers = numbers.map((value, index) => value * index);
console.log(newNumbers);

let people = [
    {name: 'Augusto', age: 29},
    {name: 'Daniela', age: 31},
    {name: 'Rafael', age: 7},
    {name: 'Maria', age: 62},
    {name: 'Joaquim', age: 72},
];
let names;
let ages;
let addID;

names = people.map(obj => obj.name);
console.log(names);

ages = people.map(obj => ({age: obj.age}));
console.log(ages);

addID = people.map(function(obj, index){
    let newObj = {...obj};
    newObj.id = index;
    return newObj;
})
console.log(addID);

