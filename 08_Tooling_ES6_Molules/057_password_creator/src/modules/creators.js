let rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
let createUppercase = () => String.fromCharCode(rand(65,91));
let createLowecase = () => String.fromCharCode(rand(97,123));
let createNumber = () => String.fromCharCode(rand(48,58));
let specialCharacter = '!@#$%¨&*()_-+=|\<,>.:;?/^~´`';
let createSpecialCharacter = () => specialCharacter[rand(0, specialCharacter.length)];

export default function createPassword(aumont, uppercase, lowercase, number, specialCharacter){
    let passAraay = [];

    for(let i = 0; i < aumont; i ++){
        uppercase && passAraay.push(createUppercase());
        lowercase && passAraay.push(createLowecase());
        number && passAraay.push(createNumber());
        specialCharacter && passAraay.push(createSpecialCharacter());
    }

    return passAraay.join('').slice(0, aumont);
}
