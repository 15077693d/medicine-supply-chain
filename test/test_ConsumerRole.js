const ConsumerRole = artifacts.require('ConsumerRole')
contract("ConsumerRole", accounts => {
    it("purchaseMedicine can addOrder", async () => {
        const expect_pharmacyAddress = accounts[1]
        const expect_amount = 100
        const expect_orderTime = 200
        const consumerRole = await ConsumerRole.deployed()
        await consumerRole.purchaseMedicine(expect_amount,expect_orderTime,"1234231",{ from: expect_pharmacyAddress })
        const actual = await consumerRole.Orders.call(0);
        assert.equal(actual.pharmacyAddress,expect_pharmacyAddress)
        assert.equal(actual.amount,expect_amount)
        assert.equal(actual.orderTime,expect_orderTime)
    })
})