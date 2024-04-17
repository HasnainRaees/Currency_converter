#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: "1",
    PKR: "278.16",
    EURO: "0.91",
    SAR: "3.75",
    AED: "3.67",
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter Currency from",
        choices: ["USD", "PKR", "EURO", "SAR", "AED"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter Currency to",
        choices: ["USD", "PKR", "EURO", "SAR", "AED"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your Amount",
    }
]);
let currencyFrom = currency[userAnswer.from];
let currencyTo = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / currencyFrom;
let convertedAmount = baseAmount * currencyTo;
console.log(convertedAmount);
