import createPassword from "./creators";

let result = document.querySelector('.result');
let aumontCharacter = document.querySelector('.aumont-character');
let uppercase = document.querySelector('.chk-uppercase');
let lowercase = document.querySelector('.chk-lowercase');
let numbers = document.querySelector('.chk-numbers');
let characters = document.querySelector('.chk-characters');
let btnCreate = document.querySelector('.btn-create');

export default () => {
    btnCreate.addEventListener('click', () => {
        result.innerHTML = create();
    });
}

function create(){
    
    let password = createPassword(
        aumontCharacter.value,
        uppercase.checked,
        lowercase.checked,
        numbers.checked,
        characters.checked);

    return password || 'Select a option!';
}