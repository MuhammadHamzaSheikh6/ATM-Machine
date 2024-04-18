#! /usr/bin/env node
import inquirer from "inquirer";
let accauntBalance = 10000;
let mypin = 606700;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "ENTER YOUR PIN",
        type: "number"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("CORRECT PIN!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "SELECT ONE",
            type: "list",
            choices: ["MITHDRAW", "CHECK AMMOUNT", "FAST CASE"]
        }
    ]);
    if (operationAns.operation === "MITHDRAW") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "ENTER YOUR AMOUNT",
                type: "number"
            }]);
        accauntBalance -= amountAns.amount;
        console.log("MY REMAINING BALANCE IS:" + accauntBalance);
    }
    else if (operationAns.operation === "CHECK AMMOUNT") {
        console.log("YOUR REMAINING BALANCE IS: " + accauntBalance);
    }
}
else {
    console.log("INCORRECT PIN!!!");
}
