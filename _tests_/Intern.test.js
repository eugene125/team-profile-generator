const Intern = require("../lib/Intern");

test("Instantiation of intern instance", () => {
    const testIntern = new Intern({});

    expect(typeof(testIntern)).toBe("object");
});

describe("getters", ()=> {
    const name = "Jimmy";
    const id = 100;
    const email = "jimmy@mail.com";
    const school = "Harvard"
    const role = "Intern";

    const testIntern = new Intern({name, id, email, school});

    it("Returns intern name", () => {
        expect(testIntern.getName()).toEqual(name)
    });

    it("Returns intern id", () => {
        expect(testIntern.getId()).toEqual(id)
    });

    it("Returns intern email", () => {
        expect(testIntern.getEmail()).toEqual(email)
    });

    it("Returns intern school name", () => {
        expect(testIntern.getSchool()).toEqual(school)
    });

    it("Returns intern role", () => {
        expect(testIntern.getRole()).toEqual(role)
    });

});