const Manager = require("../lib/Manager");

test("Instantiation of Manager instance", () => {
    const testManager = new Manager({});

    expect(typeof(testManager)).toBe("object");
});

describe("getters", ()=> {
    const name = "Jimmy";
    const id = 100;
    const email = "jimmy@mail.com";
    const officeNumber = 1234;
    const role = "Manager";

    const testManager = new Manager({name, id, email, officeNumber});

    it("Returns manager name", () => {
        expect(testManager.getName()).toEqual(name)
    });

    it("Returns manager id", () => {
        expect(testManager.getId()).toEqual(id)
    });

    it("Returns manager email", () => {
        expect(testManager.getEmail()).toEqual(email)
    });

    it("Returns manager office number", () => {
        expect(testManager.getOfficeNumber()).toEqual(officeNumber)
    });

    it("Returns manager role", () => {
        expect(testManager.getRole()).toEqual(role)
    });

});