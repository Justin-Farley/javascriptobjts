function Account(accountNumber, owner, balance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
}

Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    } else {
        console.log('Deposit amount must be positive.');
    }
};

Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    } else if (amount > this.balance) {
        console.log('Insufficient funds.');
    } else {
        console.log('Withdrawal amount must be positive.');
    }
};

Account.prototype.calculateCompoundInterest = function(years, annualRate) {
    const principal = this.balance;
    const rate = annualRate / 100; 
    const n = 1; 
    const t = years;

    const amount = principal * Math.pow((1 + rate / n), (n * t));
    const roundedAmount = Math.ceil(amount); 

    console.log(`Amount after ${years} year(s) at ${annualRate}% interest: ${roundedAmount}`);
    return roundedAmount;
};

const account1 = new Account('123456789', 'John Doe', 1000);
account1.deposit(500);
account1.withdraw(200);
account1.calculateCompoundInterest(3, 5); 
