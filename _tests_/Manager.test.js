const Manager = require("../lib/Manager");

test("Test instantiation of Manager object", () => {
    const e = new Manager({});
    expect(typeof(e)).toEqual("object")
});
test("Test Manager's name", () => {
    const e = new Manager({name: ""});
    expect(e.name).toEqual(expect.any(String))
});
test("Test Manager's id", () => {
    const e = new Manager({id: 1000});
    expect(e.id).toEqual(expect.any(Number))
});
test("Test Manager's email", () => {
    const e = new Manager({email: ""});
    expect(e.email).toEqual(expect.any(String))
});
test("Test Manager's officeNumber", () => {
    const e = new Manager({officeNumber: 1000});
    expect(e.officeNumber).toEqual(expect.any(Number))
});
test("Test getName()", () => {
    const e = new Manager({name: "Jim Bob"});
    expect(e.getName()).toEqual(expect.any(String))
});
test("Test getId()", () => {
    const e = new Manager({id: 1000});
    expect(e.getId()).toEqual(expect.any(Number))
});
test("Test getEmail()", () => {
    const e = new Manager({email: "JimBob@mail.com"});
    expect(e.getEmail()).toEqual(expect.any(String))
});
test("Test getOfficeNumber()", () => {
    const e = new Manager({officeNumber: 1000});
    expect(e.getOfficeNumber()).toEqual(expect.any(Number))
});
test("Test getRole()", () => {
    const e = new Manager({});
    expect(e.getRole()).toEqual(expect.any(String))
});