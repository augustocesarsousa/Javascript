class Device{
    constructor(model, brand){
        this.model = model;
        this.brand = brand;
        this.status = false;
    }   
    
    on(){
        if(this.status) console.log(`Your device is already on!`);
        this.status = true;
        console.log(`Device is on!`);
    }

    off(){
        if(!this.status) console.log(`Your device in already off!`);
        this.status = false;
        console.log(`Device is off!`);
    }
}

// heritage
class Smartphone extends Device{
    constructor(model, brand, color){
        super(model, brand); // <- call
        this.color = color;
    }

    call(value){
        console.log(`Your smartphone is calling ${value}...`)
    }
    
}

let smartphone1 = new Smartphone('S21', 'Samsung', 'blue');

console.log(smartphone1);
smartphone1.on();
smartphone1.call('9999-9999');
smartphone1.off();




