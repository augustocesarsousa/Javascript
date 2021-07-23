const path = require('path');
const dirFile = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');

const people = [
  { name: 'João' },
  { name: 'Maria' },
  { name: 'Eduardo' },
  { name: 'Luiza' },
];
const json = JSON.stringify(people, '', 2);
write(dirFile, json);

async function readFile(dir) {
  const dadas = await read(dir);
  renderDatas(dadas);
}

function renderDatas(dadas) {
  dadas = JSON.parse(dadas);
  dadas.forEach(val => console.log(val));
}
readFile(dirFile);

