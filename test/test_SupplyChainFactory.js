const SupplyChainFactory = artifacts.require("SupplyChainFactory")
const SupplyChain = artifacts.require("SupplyChain")
contract("SupplyChainFactory",accounts => {
    it("createSupplyChain can create supply chain", async () => {
        const expect_externalQCACAddress =accounts[0]
        const expect_internalQCQAAddress =accounts[1]
        const expect_pharmaceuticalCompanyAddress =accounts[2]
        const expect_healthDepartmentAddress =accounts[3]
        const supplyChainFactory = await SupplyChainFactory.deployed()
        await supplyChainFactory.createSupplyChain(10,100,expect_externalQCACAddress,expect_internalQCQAAddress,expect_pharmaceuticalCompanyAddress,expect_healthDepartmentAddress)
        const actual = await supplyChainFactory.count.call();
        const expect = 1
        assert.equal(actual, expect)
        const chainAddress = await supplyChainFactory.deployedSupplyChain.call(0);
        const supplyChain = await SupplyChain.at(chainAddress)
        const actual_time = await supplyChain.chainStartTime.call()
        const expect_time = 10
        assert.equal(actual_time, expect_time)
        assert.equal(expect_externalQCACAddress, await supplyChain.externalQCACAddress.call())
        assert.equal(expect_internalQCQAAddress, await supplyChain.internalQCQAAddress.call())
        assert.equal(expect_pharmaceuticalCompanyAddress, await supplyChain.pharmaceuticalCompanyAddress.call())
        assert.equal(expect_healthDepartmentAddress, await supplyChain.healthDepartmentAddress.call())
    })
})