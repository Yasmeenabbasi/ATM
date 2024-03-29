#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 25000; //Dollar
let myPin = 7860;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fastcash", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`your correct balance is  ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fastcash") {
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select the amount which you withdrawel",
                typr: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        myBalance -= fast.fastcash;
        console.log(`you have successfully withdrawal ${fast.fastcash} \nyour current balance is ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your current balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
