"use strict";
class BankAccount {
    constructor() {
        this.money = 2000;
    }
    deposit(value) {
        this.money += value;
    }
}
let bankAccount = new BankAccount();
class MySelf {
    constructor(name, bankAccount, hobbies) {
        this.name = "1";
        this.bankAccount = bankAccount;
        this.hobbies = hobbies;
    }
}
let hobbiesOfAsaad = ["Violin", "Cooking"];
let Asaad = new MySelf("Asaad", bankAccount, hobbiesOfAsaad);
Asaad.bankAccount.deposit(3000);
console.log(Asaad);
/**
 * let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself = {
    name: "Asaad",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);
 */ 
