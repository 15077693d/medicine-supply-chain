const SupplyChainFactory = artifacts.require("SupplyChainFactory")
const SupplyChain = artifacts.require("SupplyChain")
contract("SupplyChainFactory",accounts => {
    it("createSupplyChain can create supply chain", async () => {
        const supplyChainFactory = await SupplyChainFactory.deployed()
        await supplyChainFactory.createSupplyChain(10,100)
        const actual = await supplyChainFactory.count.call();
        const expect = 1
        assert.equal(actual, expect)
        const chainAddress = await supplyChainFactory.deployedSupplyChain.call(0);
        const supplyChain = await SupplyChain.at(chainAddress)
        const actual_time = await supplyChain.chainStartTime.call()
        const expect_time = 10
        assert.equal(actual_time, expect_time)
    })
})