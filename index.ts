#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log( chalk.blueBright.bold("\n \t Welcome To Bio-Data Inquirer App \n"));

let addInfo = await inquirer.prompt(
    [
       {
        name: "question1",
        type: "input",
        message: chalk.magenta("What is your Name?")

       },

       {
        name: "question2",
        type: "number",
        message: chalk.green("What is your Age?")

       },

       {
        name : "question3",
        type: "list",
        message: chalk.yellow("What is your Gender?"),
        choices: ["Male","Female","Prefer Not to Say"]
       },

       {
        name: "question4",
        type: "list",
        message: chalk.blue("What is your Qualification?"),
        choices : ["Matric","Intermediate","Graduate","Masters","PhD"]
       },

       { 
        name: "question5",
        type: "list",
        message: chalk.red("What is your Status?"),
        choices: ["Single","Engaged","Married", "Perfer Not To Say"]

       }


]);
console.log(chalk.bold("Your Name : ", chalk.bgCyanBright(addInfo.question1)));  
console.log(chalk.bold("Your Age : ", chalk.bgCyanBright(addInfo.question2)));
console.log(chalk.bold("Your Gender : ", chalk.bgCyanBright(addInfo.question3)));   
console.log(chalk.bold("Your Qualification : ", chalk.bgCyanBright(addInfo.question4)));
console.log(chalk.bold("Your Status : ", chalk.bgCyanBright(addInfo.question5)));

