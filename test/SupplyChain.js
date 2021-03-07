const SupplyChain = artifacts.require("SupplyChain")
contract( "SupplyChain", accounts => {
    it("trackChain return 123", async() => {
        const supplyChain = await SupplyChain.deployed()
        actual = await supplyChain.trackChain.call()
        console.log(actual['2'].toNumber())
        assert.equal(await supplyChain.trackChain.call(),123)
    })
})