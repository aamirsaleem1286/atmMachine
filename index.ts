#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

const atmMachine = await inquirer.prompt([
  {
    name: "atmpin",
    type: "number",
    message: "Please enter your ATM PIN:",
  },
]);
let pin = 1234;
let balance = 4000;
if (atmMachine.atmpin === pin) {
  console.log(chalk.green("Welcome to the ATM!"));
  const options = await inquirer.prompt([
    {
      name: "options",
      type: "list",
      message: "What would you like to do?",
      choices: ["Deposit", "Withdraw", "Balance", "Exit"],
    },
  ]);
  if (options.options === "Deposit") {
    const Deposit = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "How much would you like to deposit?",
      },
    ]);
    balance = balance + Deposit.amount;
    console.log(chalk.green(`Your balance is ${balance}`));
  }
  if (options.options === "Withdraw") {
    const Withdraw = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "How much would you like to withdraw?",
      },
    ]);
    if (Withdraw.amount > balance) {
      console.log(chalk.redBright("your amount is not enough to withdraw"));
    } else {
      balance = balance - Withdraw.amount;
      console.log(chalk.redBright(`Your balance is ${balance}`));
    }
  }
  if (options.options === "Balance") {
    console.log(chalk.green(`Your balance is ${balance}`));
  }
} else {
  console.log(chalk.redBright("incorrect ATM PIN"));
}
