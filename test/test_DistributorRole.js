const DistributorRole = artifacts.require("DistributorRole")
contract("DistributorRole", accounts => {
    it("internalQCQA change isPass internalQCQATime", async () => {
        const expect_time = 100
        const distributorRole = await DistributorRole.deployed()
        await distributorRole.setInternalQCQA(accounts[1])
        await distributorRole.internalQCQA(true, expect_time,{from:accounts[1]})
        const actual = await distributorRole.medicine.call();
        assert.equal(actual.internalQCQATime,expect_time)
        assert.equal(actual.internalQCQA,true)
    })

    it("externalQCQA change isPass externalQCQATime", async () => {
        const expect_time = 100
        const distributorRole = await DistributorRole.deployed()
        await distributorRole.setExternalQCQA(accounts[1])
        await distributorRole.externalQCQA(true, expect_time,{from:accounts[1]})
        const actual = await distributorRole.medicine.call();
        assert.equal(actual.externalQCQATime,expect_time)
        assert.equal(actual.externalQCQA,true)
    })
})