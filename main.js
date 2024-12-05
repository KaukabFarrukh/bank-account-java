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
    
}