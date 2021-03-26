const Order = artifacts.require('Order');
contract("Order", accounts => {
    it("before addOrder, getOrderAmount is 0", async () => {
        const order = await Order.deployed()
        const expect = 0
        const actual = await order.OrderAmount.call()
        assert.equal(expect, actual)
    })

    it("after addOrder 1 order, getOrderAmount is 1", async () => {
        const order = await Order.deployed()
        await order.addOrder(accounts[0], 100, 0,"124132423")
        const expect = 1
        const actual = await order.OrderAmount.call()
        assert.equal(expect, actual.toNumber())
    })

    it("after addOrder 1 order, physcial pharmacyAddress is 124132423", async () => {
        const order = await Order.deployed()
        await order.addOrder(accounts[0], 100, 0,"124132423")
        const expect = "124132423"
        const actual = await order.Orders.call(0)
        console.log(actual)
        assert.equal(expect, actual.pharmacyPhysicalAddress)
    })

    it("after addOrder 3 order, getOrderId is 2", async () => {
        const order = await Order.deployed()
        const actual = await order.addOrder.call(accounts[0], 100, 0,"23423413")
        const expect = 2
        assert.equal(expect, actual.toNumber())
    })
    }
)