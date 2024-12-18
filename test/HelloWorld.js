const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", () => {
    it("HelloWorld Testting", async () => {
        const helloWorld = await HelloWorld.deployed();
        await helloWorld.setName("User Name");
        const result = await helloWorld.yourName();
        assert(result === "User Name");
    });
});