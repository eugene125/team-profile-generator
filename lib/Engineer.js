/* 
In addition to what's included on the employee file, the engineer must include:
- github -- GitHub username
- getGithub()
- getRole -- overridden to return 'Engineer'

*/

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(gitHub) {
        this.gitHub = gitHub;
    }

    getGithub();
    getRole(){
        // overridden to return "engineer"
    };
}