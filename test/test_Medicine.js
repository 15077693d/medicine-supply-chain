const Medicine = artifacts.require("Medicine")
contract("Medicine", accounts => {
    it("setMedicine can set medicine",async () => {
        const medicine = await Medicine.deployed()
        await medicine.setMedicine(0,
            0,"test","test",true,0,true,0,true,0,true,0
        )
        expect = "test"
        actual = await medicine.medicine.call()
        assert.equal(expect, actual.name)
    })

    it("getMedicine can get medicine",async () => {
        const medicine = await Medicine.deployed()
        await medicine.setMedicine(0,
            0,"test","test",true,0,true,0,true,0,true,0
        )
        expect = "test"
        actual = await medicine.getMedicine()
        assert.equal(expect, actual['2'])
    })
    }
)