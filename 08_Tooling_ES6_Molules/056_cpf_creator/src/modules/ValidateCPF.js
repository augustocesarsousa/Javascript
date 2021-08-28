export default class ValidateCPF{
    constructor(cpf){
        Object.defineProperty(this, 'cleanCPF', {
            enumerable: true,
            get: function(){
                return cpf.replace(/\D+/g, '');
            }
        });
    }

    validate(){
        if(!this.cleanCPF) return false;
        if(typeof this.cleanCPF !== 'string') return false;
        if(this.cleanCPF.length !== 11) return false;
        if(this.isSequence()) return false;        
        this.createCPF();

        return this.newCPF === this.cleanCPF;
    }

    isSequence(){
        return this.cleanCPF.charAt(0).repeat(this.cleanCPF.length) === this.cleanCPF;
    }

    createCPF(){
        let partCPF = this.cleanCPF.slice(0, -2);
        let digit1 = this.getDigit(partCPF);
        let digit2 = this.getDigit(partCPF + digit1);
        this.newCPF = partCPF + digit1 + digit2;        
    }

    static getDigit(partCPF){
        let total = 0;
        let reverse = partCPF.length + 1;

        for(let stringNumber of partCPF){
            total += reverse * Number(stringNumber);
            reverse--;
        }

        let digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }
}