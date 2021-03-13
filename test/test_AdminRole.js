const AdminRole = artifacts.require('AdminRole')
contract("AdminRole", accounts  => {
    it("provideInformation can change infomation", async() => {
        const adminRole = await AdminRole.deployed()
        adminRole.setHealthDepartment(accounts[1])
        const expect_info = "test info"
        await adminRole.provideInformation(expect_info,{from:accounts[1]})
        const actual = await adminRole.medicine.call()
        assert.equal(expect_info, actual.infomation)
    })
    it("approveMedicine can change approved as true", async() => {
        const adminRole = await AdminRole.deployed()
        adminRole.setHealthDepartment(accounts[1])
        await adminRole.approveMedicine({from:accounts[1]})
        const actual = await adminRole.medicine.call()
        assert.equal(true, actual.approved)
    })
})