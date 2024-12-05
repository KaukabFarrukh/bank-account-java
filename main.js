//creating Account
const account = {
    accountName: "Sara Ali",
    balance: 1000,

//Function to display account balance
getBalance = function () {
    console.log('Your current balance is $${this.balance}');
},

//Function to deposit money
deposit: function (amount) {
    if (isNaN(amount) || amount <= 0) {
     console.log("Invalid withdrawl amount.");
     return;   
    }
    if (amount > this.balance) {
        console.log("Insufficient funds.");
        return
    }
    this.balance -= amount;
    console.log("Withdraw $${amount}. New balance: $${this.balance}");
},

//Account holders name
getAccountName: function () {
    console.log('Account Holder: ${this.accountName}');
},

//for errors
accountError: function (message) {
    console.log('Error: ${message}');
},

//to exit account
exitAccount: function () {
    console.log("Exixting the account.Have a great day!");
},

};


//ATM function
function atm() {
    let exit = false;

    while (!exit) {

        console.log('
           Welcome to the ATM.Choose an option:
           1. View Account balance
           2. Deposit Money
           3. Withdraw Money
           4. View Account Holder's Name
           5.Exit
           ');'

    const choice = prompt("Enter your choice (1-5):");
    
    switch (choice) {
        case "1":
            account.getBalance();
            break;
        case "2":
            const depositAmount = parseFloat(prompt("Enter ammount to deposit:"));
            account.deposit(depositAmount);
            break;
        case "3":
            const withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
            account.withdrawal(withdrawAccount);
            break;
        case "4":
            account.getAccountName();
            break;
        case "5":
            account.exitAccount();
            exit = true;
            break;
        default:
            account.accountError("Invalid choice. Please try again.");
        }
    }
}