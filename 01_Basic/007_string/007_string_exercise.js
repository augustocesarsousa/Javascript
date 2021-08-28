let myName = prompt("Enter your full name:");

document.body.innerHTML += `Your name is <b>${myName}</b><br>`;
document.body.innerHTML += `Your name has <b>${myName.length}</b> letters<br>`;
document.body.innerHTML += `The second letter of your name is <b>"${myName[1]}"</b><br>`;
document.body.innerHTML += `The first index of the letter "a" in its name is <b>${myName.indexOf("a")}</b><br>`;
document.body.innerHTML += `The last index of the letter "a" in its name is <b>${myName.lastIndexOf("a")}</b><br>`;
document.body.innerHTML += `The last three letters of your name are <b>${myName.slice(-3)}</b><br>`;
document.body.innerHTML += `The words of your name are <b>[${myName.split(" ")}]</b><br>`;
document.body.innerHTML += `Your name with the uppercase letters is <b>${myName.toUpperCase()}</b><br>`;
document.body.innerHTML += `Your name with the lowercase letters is <b>${myName.toLowerCase()}</b><br>`;


