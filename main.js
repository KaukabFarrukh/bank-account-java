// Importing the readline-sync package, i did this becaaause i was not able to run dev on my terminal
const readlineSync = require("readline-sync");

// Creating Bank Account
const account = {
  accountName: "Sara Ali",
  balance: 1000,

  // Function to display account balance
  getBalance: function () {
    console.log(`Your current balance is $${this.balance}`);
  },

  // Function to deposit money
  deposit: function (amount) {
    if (isNaN(amount) || amount <= 0) {
      console.log("Invalid deposit amount.");
      return;
    }
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  },

  // Function to withdraw money
  withdrawal: function (amount) {
    if (isNaN(amount) || amount <= 0) {
      console.log("Invalid withdrawal amount.");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
  },

  // Function to display account holder's name
  getAccountName: function () {
    console.log(`Account Holder: ${this.accountName}`);
  },

  // Function for handling errors
  accountError: function (message) {
    console.log(`Error: ${message}`);
  },

  // Function to exit the account
  exitAccount: function () {
    console.log("Exiting the account. Have a great day!");
  },
};

// ATM function
function atm() {
  let exit = false;

  while (!exit) {
    console.log(`
      Welcome to the ATM. Choose an option:
      1. View Account Balance
      2. Deposit Money
      3. Withdraw Money
      4. View Account Holder's Name
      5. Exit
    `);

    const choice = readlineSync.question("Enter your choice (1-5): ");

    switch (choice) {
      case "1":
        account.getBalance();
        break;
      case "2":
        const depositAmount = parseFloat(
          readlineSync.question("Enter amount to deposit: ")
        );
        account.deposit(depositAmount);
        break;
      case "3":
        const withdrawAmount = parseFloat(
          readlineSync.question("Enter amount to withdraw: ")
        );
        account.withdrawal(withdrawAmount);
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

// Run the ATM
atm();
