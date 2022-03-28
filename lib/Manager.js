/* 
In addition to what's included on the employee file, the manager must include:
- officeNumber
- getRole() -- overridden to return 'Manager'

*/

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber){
        this.officeNumber = officeNumber;
    }

    getRole(){
        // overridden to return "Manager"
    }
}