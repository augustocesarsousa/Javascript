function Account(agency, account, balance){
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.deposit = function(value){
    this.balance += value;
    this.showBalance();
};
Account.prototype.withdraw = function(value){
    if(this.balance < value){
        console.log(`Insufficient balance: ${this.balance}`);
        return;
    }
    this.balance -= value;
    this.showBalance();
};
Account.prototype.showBalance = function(){
    console.log(`Ag/Ac: ${this.agency}/${this.account} | Balance: ${this.balance}`);
};

function CheckingAccount(agency, account, balance, limit){
    Account.call(this, agency, account, balance);
    this.limit = limit;
}

CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

// polymorphism
CheckingAccount.prototype.withdraw = function(value){
    if((this.balance + this.limit) < value){
        console.log(`Insufficient balance: ${this.balance}`);
        return;
    }
    this.balance -= value;
    this.showBalance();
}

function SavingsAccount(agency, account, balance){
    Account.call(this, agency, account, balance);
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

let ca = new CheckingAccount(1023, 9887762, 50, 100);

ca.deposit(20);
ca.withdraw(170);
ca.withdraw(1);

let sa = new SavingsAccount(1023, 9884435, 500);

sa.deposit(200);
sa.withdraw(650);
sa.withdraw(100);