import ValidateCPF from "./ValidateCPF";

export default class CreateCPF { 

    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatCPF(cpf){
        return(
            cpf.slice(0 ,3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    creteNewCPF(){
        let cpfNoDigit = this.rand();
        let digit1 = ValidateCPF.getDigit(cpfNoDigit);
        let digit2 = ValidateCPF.getDigit(cpfNoDigit + digit1);
        let newCPF = cpfNoDigit + digit1 + digit2;
        return this.formatCPF(newCPF);

    }
}