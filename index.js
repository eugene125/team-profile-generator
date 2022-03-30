// Setting requires
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

// Creating an array that receives objects of employee types
const teamMembers = [];

// Setting an object of the employee types
const questions = {
    // Each employee type is asked the "employee" questions
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
    // Each individual employee type has a sepcific prompt catered to their role
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
            name: "gitHub",
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

// The prompt variable triggers the questions array which begins with the employee's prompts and the manager's prompt
const prompt = async (employeeType) => {
    let user = "";
    let userPrompt = await inquirer.prompt([...questions.employee, ...questions[employeeType]]);
    // Once the user (manager) is finished with the prompts, their choices are then stored into the user variable
    switch(employeeType){
        case "manager":
            user = new Manager(userPrompt);
            break;
        case "engineer":
            user = new Engineer(userPrompt);
            break;
        case "intern":
            user = new Intern(userPrompt);
            break;
        default:
            return;
    }
    // The newly created user variables are then pushed into the teamMembers array
    teamMembers.push(user)
    
    // The user is then prompted to add a new team member or finish building their team
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
prompt("manager")
// Once the user is has finished adding team members, the htmlFile function is called
.then( () => fs.writeFileSync("index.html", htmlFile(teamMembers)));

// When the htmlFile function is called, the data in the teamMembers array is then added into an HTML file template
let htmlFile = (teamMembers) => (`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./dist/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    
    ${teamMembers.map((member) =>(`
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h4 class="card-title">${member.getName()}</h4>
        <h5>Role: ${member.getRole()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Employee ID: ${member.getId()}</h6>
        <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
        ${member.getGitHub != undefined 
            ? `<p>GitHub: <a href='https://github.com' target='_blank'>${member.getGitHub()}</a></p>`
            : null || 
        member.getSchool != undefined 
            ? `<p>School: ${member.getSchool()}</p>` 
            : null ||
        member.getOfficeNumber != undefined 
            ? `<p>Office Number: ${member.getOfficeNumber()}</p>`
            : null
        }
        </div>
    </div>
    `)).join("")}
</body>
</html>
`);