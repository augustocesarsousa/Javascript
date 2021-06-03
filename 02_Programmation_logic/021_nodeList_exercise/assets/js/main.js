let $content = document.querySelector(".content");
let $h1 = $content.querySelector("h1");
let $p = $content.querySelectorAll("p");

let styleBody = getComputedStyle(document.body);
let bgColorBody = styleBody.backgroundColor;

$h1.style.backgroundColor = bgColorBody;
$h1.style.color = "#fff";
$h1.style.borderRadius = "10px";
$h1.style.padding = "10px";
$h1.style.boxShadow = "0px 0px 5px 5px black";

for(let value of $p){
    value.style.backgroundColor = bgColorBody;
    value.style.color = "#fff";
    value.style.borderRadius = "10px";
    value.style.padding = "10px";
    value.style.boxShadow = "0px 0px 5px 5px black";
}