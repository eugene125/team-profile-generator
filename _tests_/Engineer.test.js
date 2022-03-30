const Engineer = require("../lib/Engineer");

test("Test instantiation of Engineer object", () => {
    const e = new Engineer({});
    expect(typeof(e)).toEqual("object")
});
test("Test Engineer's name", () => {
    const e = new Engineer({name: ""});
    expect(e.name).toEqual(expect.any(String))
});
test("Test Engineer's id", () => {
    const e = new Engineer({id: 1000});
    expect(e.id).toEqual(expect.any(Number))
});
test("Test Engineer's email", () => {
    const e = new Engineer({email: ""});
    expect(e.email).toEqual(expect.any(String))
});
test("Test Engineer's GitHub", () => {
    const e = new Engineer({gitHub: ""});
    expect(e.gitHub).toEqual(expect.any(String))
});
test("Test getName()", () => {
    const e = new Engineer({name: "Billy Joe"});
    expect(e.getName()).toEqual(expect.any(String))
});
test("Test getId()", () => {
    const e = new Engineer({id: 1000});
    expect(e.getId()).toEqual(expect.any(Number))
});
test("Test getEmail()", () => {
    const e = new Engineer({email: "BillyJoe@mail.com"});
    expect(e.getEmail()).toEqual(expect.any(String))
});
test("Test getGitHub()", () => {
    const e = new Engineer({gitHub: "BillyJoe1000"});
    expect(e.getGitHub()).toEqual(expect.any(String))
});
test("Test getRole()", () => {
    const e = new Engineer({});
    expect(e.getRole()).toEqual(expect.any(String))
});