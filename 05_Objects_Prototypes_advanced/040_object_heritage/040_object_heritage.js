// creating product
function Product(name, price){
    this.name = name;
    this.price = price;
}

// creating product methods on prototype
Product.prototype.increase = function(value){
    this.price += value;
}

Product.prototype.discount = function(value){
    this.price -+ value;
}

// creating "child" product
function Shirt(name, price, color){
    // heritaging father's features
    Product.call(this, name, price);
    this.color = color;
}

// adding father's prototype on child
Shirt.prototype = Object.create(Product.prototype);
// returning child's constructor
Shirt.prototype.constructor = Shirt;

let shirt1 = new Shirt('t-shirt', 5, 'red');
console.log(`Product:`);
console.log(shirt1);

shirt1.increase(10);
console.log(`Product with increase 10,00`);
console.log(shirt1);

// overwriting father's increase method
Shirt.prototype.increase = function(percentage){
    this.price = this.price + (this.price * (percentage / 100));
}

shirt1.increase(50);
console.log(`Product with increase 50%:`);
console.log(shirt1);