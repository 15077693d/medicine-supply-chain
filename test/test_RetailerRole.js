const RetailerRole = artifacts.require("RetailerRole")
contract("Retailer",accounts => {
    it('developMedicine can set price and name', async () => {
        const expect_name = "Oscar's medicine"
        const expect_price = 100
        const expect_time = 1000
        const expect_bool = true
        const retailerRole = await RetailerRole.deployed()   
        await retailerRole.setPharmaceuticalCompany(accounts[1])
        await retailerRole.developMedicine(expect_price, expect_name,expect_time,{from:accounts[1]})
        const actual = await retailerRole.medicine.call()
        const actual_name = actual.name
        const actual_price = actual.price
        const actual_bool = actual.developed
        assert.equal(expect_name,actual_name)
        assert.equal(expect_price,actual_price)
        assert.equal(expect_bool,actual_bool)
    })

    it('supplyMedicine can change orderId1 supplied and supplytime', async () => {
        const expect_supplyTime = 10
        const retailerRole = await RetailerRole.deployed()  
        await retailerRole.setPharmaceuticalCompany(accounts[1])
        await retailerRole.addOrder(accounts[0], 100, 0,"31242")
        await retailerRole.supplyMedicine(0, expect_supplyTime,true,{from:accounts[1]})
        const actual = await retailerRole.Orders.call(0)
        assert.equal(expect_supplyTime,actual.supplyTime)
        assert.equal(true,actual.supplied)
    })
}

)