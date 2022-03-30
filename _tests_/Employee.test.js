const Employee = require("../lib/Employee");

describe("getters", ()=> {
    const name = "Timmy";
    const id = 100;
    const email = "timmy@mail.com";
    const role = "Employee";

    const testEmployee = new Employee(name, id, email);

    it("Returns employee name", () => {
        expect(testEmployee.getName()).toEqual(name)
    });

    it("Returns employee id", () => {
        expect(testEmployee.getId()).toEqual(id)
    });

    it("Returns employee email", () => {
        expect(testEmployee.getEmail()).toEqual(email)
    });

    it("Returns employee role", () => {
        expect(testEmployee.getRole()).toEqual(role)
    });

});