

class BankAccount {
    money: number = 2000;
    deposit(value: number) {
        this.money += value;
    }
}

let bankAccount: BankAccount = new BankAccount();

class MySelf {
    name: string;
    bankAccount: BankAccount;
    hobbies: string[];
    constructor(name: string, bankAccount: BankAccount, hobbies: string[]) {
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