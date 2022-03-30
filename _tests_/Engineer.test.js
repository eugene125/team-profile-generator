const Engineer = require("../lib/Engineer");

test("Instantiation of engineer instance", () => {
    const testEngineer = new Engineer({});

    expect(typeof(testEngineer)).toBe("object");
});

describe("getters", ()=> {
    const name = "Jimmy";
    const id = 100;
    const email = "jimmy@mail.com";
    const gitHub = "JimmyGitHub"
    const role = "Engineer";

    const testEngineer = new Engineer({name, id, email, gitHub});

    it("Returns engineer name", () => {
        expect(testEngineer.getName()).toEqual(name)
    });

    it("Returns engineer id", () => {
        expect(testEngineer.getId()).toEqual(id)
    });

    it("Returns engineer email", () => {
        expect(testEngineer.getEmail()).toEqual(email)
    });

    it("Returns engineer GitHub", () => {
        expect(testEngineer.getGitHub()).toEqual(gitHub)
    });

    it("Returns engineer role", () => {
        expect(testEngineer.getRole()).toEqual(role)
    });

});