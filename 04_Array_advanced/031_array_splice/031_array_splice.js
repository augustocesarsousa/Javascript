let names = ['Augusto','Daniela','Rafael','Maria','Joaquim'];
let removed;

// push with splice
names.splice(names.length, 0, 'Fernanda', 'Alexandre')
console.log(names);

// pop with splice
removed = names.splice(-1,1);
console.log(names, removed);

// shift with splice
removed = names.splice(0,1);
console.log(names, removed);

// unshift with splice
names.splice(0, 0, 'Aline');
console.log(names);
