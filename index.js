const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");


const initialPrompt = async () => {
    inquirer.prompt(
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
)};


const html = ``;