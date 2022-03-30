const Employee = require("../lib/Employee");

test("Test instantiation of Employee object", () => {
    const e = new Employee();
    expect(typeof(e)).toEqual("object")
});

test("Test employee's name", () => {
    const e = new Employee("Employee Name");
    expect(e.name).toEqual(expect.any(String))
});

test("Test employee's id", () => {
    const e = new Employee("", 1000);
    expect(e.id).toEqual(expect.any(Number))
});

test("Test employee's email", () => {
    const e = new Employee("", 1000, "employee@mail.com");
    expect(e.email).toEqual(expect.any(String))
});

test("Test getName()", () => {
    const e = new Employee("");
    expect(e.getName()).toEqual(expect.any(String))
});
test("Test getId()", () => {
    const e = new Employee("", 1000);
    expect(e.getId()).toEqual(expect.any(Number))
});

test("Test getEmail()", () => {
    const e = new Employee("", 1000, "");
    expect(e.getEmail()).toEqual(expect.any(String))
});

test("Test getRole()", () => {
    const e = new Employee();
    expect(e.getRole()).toEqual(expect.any(String))
});