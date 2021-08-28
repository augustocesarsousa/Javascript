// IIFE = Immediately invoked function expession

(function(){
    let firstName = "Augusto";
    let lastName = "Sousa";

    showName();

    function showName(){
        console.log(`${firstName} ${lastName}`);
    }
})();

// with parameters

(function(number1, number2){
    sum();

    function sum(){
        console.log(number1 + number2);
    }
})(5,7);