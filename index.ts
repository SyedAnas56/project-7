#!/usr/bin/env node
import inquirer from "inquirer";

const currency = {
    USD: 1,
    PKR: 278,
    INR: 84,
    POUNDS: 0.79,
    EURO: 0.93,
    CAD: 1.37,
    AED: 3.67,
    AUD: 1.50,
    JPY: 160,
    RUB: 89,
    CNY: 7.26,
};

type Currency = keyof typeof currency;

interface ConversionQuestions {
    from: Currency;
    to: Currency;
    amount: number;
}

const conversionQuestions = await inquirer.prompt<ConversionQuestions>([
    {
        name: "from",
        message: "Select your currency from",
        type: "list",
        choices: ["USD", "PKR", "INR", "POUNDS", "EURO", "CAD", "AED", "AUD", "JPY", "RUB", "CNY"]
    },
    {
        name: "to",
        message: "Select your currency to",
        type: "list",
        choices: ["USD", "PKR", "INR", "POUNDS", "EURO", "CAD", "AED", "AUD", "JPY", "RUB", "CNY"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);

let fromAmount = currency[conversionQuestions.from];
let toAmount = currency[conversionQuestions.to];
let baseAmount = conversionQuestions.amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(convertedAmount.toFixed(2));
