let number = Number(prompt("Enter your number:"));
let $txtDiv = document.getElementById("txtDiv");

$txtDiv.innerHTML = `<p>Your number is <b>${number}</b></p>`;
$txtDiv.innerHTML += `<p>The quare root of your number is <b>${number ** 0.5}</b></p>`;
$txtDiv.innerHTML += `<p>Is integer: <b>${Number.isInteger(number)}</b></p>`;
$txtDiv.innerHTML += `<p>Is NaN: <b>${Number.isNaN(number)}</b></p>`;
$txtDiv.innerHTML += `<p>Rounding up: <b>${Math.ceil(number)}</b></p>`;
$txtDiv.innerHTML += `<p>Rounding down: <b>${Math.floor(number)}</b></p>`;
$txtDiv.innerHTML += `<p>With two decimal places: <b>${number.toFixed(2)}</b></p>`;
