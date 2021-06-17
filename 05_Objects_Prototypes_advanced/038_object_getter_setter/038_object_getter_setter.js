function Product(name, price, stock) {

    Object.defineProperty(this, 'name', {
        enumerable: true,
        configurable: true,
        get: function(){
            return name;
        },
        set: function(value){
            name = value;
        }
    });

    Object.defineProperties(this, {
        price: {
            enumerable: true,
            configurable: true,
            get: function(){
                return price;
            },
            set: function(value){
                if(typeof value !== 'number') {
                    throw new TypeError('Price is not a number!');
                }
                price = value;
            }
        },
        stock: {
            enumerable: true,
            configurable: true,
            get: function(){
                return stock;
            },
            set: function(value){
                if(typeof value !== 'number') {
                    throw new TypeError('Stock is not a number!');
                }
                stock = value;
            }
        }
    })
}

let p1 = new Product('cup', 2, 10);
p1.stock = 'aaa';
console.log(p1.name, p1.price, p1.stock);