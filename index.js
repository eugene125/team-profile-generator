const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const html = ``;
const teamMembers = [];

const questions = {
    employee: [
        {
            type: "input",
            name: "name",
            message: "What is your employee's name?\n",
        },
        {
            type: "input",
            name: "id",
            message: "What is your employee's ID?\n",
        },
        {
            type: "input",
            name: "email",
            message: "What is your employee's email address?\n",
        },
    ],
    manager: [
        {
            type: "input",
            name: "officeNumber",
            message: "Please provide your office number:\n",
        }
    ],
    engineer: [
        {
            type: "input",
            name: "github",
            message: "What is your engineer's GitHub username?\n",
        },
    ],
    intern: [
        {
            type: "input",
            name: "school",
            message: "What school does your intern attend?\n",
        },
    ],
};

const prompt = async (employeeType) => {
    let userPrompt = await inquirer.prompt([...questions.employee, ...questions[employeeType]]);
    teamMembers.push({...userPrompt, type: employeeType})
    
    const addMember = await inquirer.prompt({
        type: "list",
        name: "choice",
        message: "Would you like to add another team member or finish building your team?",
        choices: ["engineer", "intern", "Finish building my team"],
    });

    if (addMember.choice == "Finish building my team"){
        console.log(teamMembers)
        return;
    } else {
        await prompt(addMember.choice)
    }

};
prompt("manager");