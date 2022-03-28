/* 
Employee parents class must contain:
- name
- id
- email
- getName()
- getId()
- getEmail()
- getRole() -- returns "employee"
*/

const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName();
    getId();
    getEmail();
    getRole(){
        // return "employee";
    };
}