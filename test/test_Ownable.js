const Ownable = artifacts.require("Ownable")
contract("Ownable", accounts => {
    it("Can setPharmaceuticalCompany address", async() => {
        const ownable = await Ownable.deployed()
        await ownable.setPharmaceuticalCompany(accounts[0])
        let actual = await await ownable.pharmaceuticalCompanyAddress.call()
        let expect = accounts[0]
        assert.equal(actual,expect)
    })
    it("Can setInternalQCQA address", async() => {
        const ownable = await Ownable.deployed()
        await ownable.setInternalQCQA(accounts[1])
        let actual = await await ownable.internalQCQAAddress.call()
        let expect = accounts[1]
        assert.equal(actual,expect)
    })
    it("Can setExternalQCQA address", async() => {
        const ownable = await Ownable.deployed()
        await ownable.setExternalQCQA(accounts[2])
        let actual = await await ownable.externalQCACAddress.call()
        let expect = accounts[2]
        assert.equal(actual,expect)
    })
    it("Can setHealthDepartment address", async() => {
        const ownable = await Ownable.deployed()
        await ownable.setHealthDepartment(accounts[3])
        let actual = await await ownable.healthDepartmentAddress.call()
        let expect = accounts[3]
        assert.equal(actual,expect)
    })
})