function Product(name, price, stock) {

    Object.defineProperty(this, 'name', {
        enumerable: true,
        value: name,
        writable: true,
        configurable: true
    });

    Object.defineProperties(this, {
        price: {
            enumerable: true,
            value: price.toFixed(2),
            writable: true,
            configurable: true
        },
        stock: {
            enumerable: true,
            value: stock,
            writable: true,
            configurable: true
        }
    })
}

let p1 = new Product('cup', 2.10, 10);
console.log(p1);