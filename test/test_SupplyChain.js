const SupplyChain = artifacts.require("SupplyChain")
const Ownable = artifacts.require("Ownable")
contract( "SupplyChain", accounts => {
    it("trackChain return chainStartTime chainEndTime", async() => {
        const supplyChain = await SupplyChain.deployed()
        let actual_chainStart=await supplyChain.chainStartTime.call()
        let actual_chainEnd=await supplyChain.chainEndTime.call()
        assert.equal(actual_chainStart,10)
        assert.equal(actual_chainEnd,100)
    })
})