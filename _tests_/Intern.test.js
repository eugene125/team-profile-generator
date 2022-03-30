const Intern = require("../lib/Intern");

test("Test instantiation of Intern object", () => {
    const e = new Intern({});
    expect(typeof(e)).toEqual("object")
});
test("Test Intern's name", () => {
    const e = new Intern({name: ""});
    expect(e.name).toEqual(expect.any(String))
});
test("Test Intern's id", () => {
    const e = new Intern({id: 1000});
    expect(e.id).toEqual(expect.any(Number))
});
test("Test Intern's email", () => {
    const e = new Intern({email: ""});
    expect(e.email).toEqual(expect.any(String))
});
test("Test Intern's School", () => {
    const e = new Intern({school: ""});
    expect(e.school).toEqual(expect.any(String))
});
test("Test getName()", () => {
    const e = new Intern({name: "Richard Moses"});
    expect(e.getName()).toEqual(expect.any(String))
});
test("Test getId()", () => {
    const e = new Intern({id: 1000});
    expect(e.getId()).toEqual(expect.any(Number))
});
test("Test getEmail()", () => {
    const e = new Intern({email: "RichardMoses@mail.com"});
    expect(e.getEmail()).toEqual(expect.any(String))
});
test("Test getSchool()", () => {
    const e = new Intern({school: ""});
    expect(e.getSchool()).toEqual(expect.any(String))
});
test("Test getRole()", () => {
    const e = new Intern({});
    expect(e.getRole()).toEqual(expect.any(String))
});