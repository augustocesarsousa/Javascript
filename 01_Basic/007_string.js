// inner quotes
let text1 = "Mussum \"Ipsum\"."; 
console.log(text1);

// index
console.log(text1[4]); 
console.log(text1.charAt(5)); 
console.log(text1.indexOf("s")); 
console.log(text1.lastIndexOf("s")); 
console.log(text1.search(/I/)); 


// concatenation 
console.log(text1.concat(" Mais vale um bebadis conhecidiss")); 
console.log(text1 + " Mais vale um bebadis conhecidiss");
console.log(`${text1} Mais vale um bebadis conhecidiss`);

// replacementt
console.log(text1.replace("u", "$"));
console.log(text1.replace(/u/g, "$"));

// length
console.log(text1.length);

// filter
console.log(text1.slice(2, 7));
console.log(text1.slice(-5, -1));
console.log(text1.substring(text1.length -5, text1.length -1));

// separation
text1 += " Mais vale um bebadis conhecidiss";
console.log(text1.split(" ")); 
console.log(text1.match(/[a-z]/g));

// transformation
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());

