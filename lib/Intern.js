/* 
In addition to what's included on the employee file, the intern must include:
- school
- getSchool()
- getRole() -- overridden to return 'Intern'

*/

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school){
        this.school = school;
    
        internPrompt = async () => {
            inquirer.prompt(
                {
                    type: "input",
                    name: "school",
                    message: "What school are you enrolled in?",
                },
            )}
        }

    getSchool();
    getRole(){
        // overridden to return "intern"
    }
}