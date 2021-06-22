function ValidateCPF(cpf){
    Object.defineProperty(this, 'cleanCPF', {
        enumerable: true,
        get: function(){
            return cpf.replace(/\D+/g, '');
        }
    })
}

ValidateCPF.prototype.validate = function(){
    if(typeof this.cleanCPF === 'undefined') return false;
    if(this.cleanCPF.length !== 11) return false;
    if(this.isSequence()) return false;

    let partCPF = this.cleanCPF.slice(0, -2);
    let digit1 = this.getDigit(partCPF);
    let digit2 = this.getDigit(partCPF + digit1);
    let newCPF = partCPF + digit1 + digit2;
    return newCPF === this.cleanCPF;
}

ValidateCPF.prototype.getDigit = function(partCPF){
    let cpfArray = Array.from(partCPF);
    let regressive = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) => {
        ac += (regressive * Number(val));
        regressive--;
        return ac;
    },0);
    let digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit);
}

ValidateCPF.prototype.isSequence = function(){
    let sequence = this.cleanCPF[0].repeat(this.cleanCPF.length);
    return sequence === this.cleanCPF;
};

let cpf = new ValidateCPF('340.485.490-06');
// let cpf = new ValidateCPF('222.222.222-22');

if(cpf.validate()){
    console.log('CPF is valid!');
}else{
    console.log('CPF is not valid!');
}