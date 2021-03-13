const Order = artifacts.require('Order');
contract("Order", accounts => {
    it("before addOrder, getOrderId is 0", async () => {
        const order = await Order.deployed()
        const expect = 0
        const actual = await order.getOrderId()
        assert.equal(expect, actual)
    })

    it("after addOrder 1 order, getOrderId is 1", async () => {
        const order = await Order.deployed()
        await order.addOrder(accounts[0], 100, 0)
        const expect = 1
        const actual = await order.getOrderId()
        assert.equal(expect, actual)
    })

    it("after addOrder 1 order, pharmacyAddress is account[0]", async () => {
        const order = await Order.deployed()
        await order.addOrder(accounts[0], 100, 0)
        const expect = accounts[0]
        const actual = await order.Orders.call(1)
        assert.equal(expect, actual.pharmacyAddress)
    })
    }
)