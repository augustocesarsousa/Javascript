class RemoteControl{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    upVolume(){
        if(this.volume >= 100) return;
        this.volume += 2;
    }

    downVolume(){
        if(this.volume <= 0) return;
        this.volume -= 2;
    }

    // static method
    static changeBattery(){
        console.log('Battery was changed!');
    }
}

let control1 = new RemoteControl('Philips');

control1.upVolume();
control1.upVolume();
control1.upVolume();
control1.upVolume();
control1.upVolume();

console.log(control1);

// static method
RemoteControl.changeBattery();