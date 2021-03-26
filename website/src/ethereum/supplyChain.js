import {SupplyChain, getAccount} from './web3'

async function supply(supplyChainAddress,id,isSupply){
    let supplyChain = SupplyChain(supplyChainAddress)
    await supplyChain.methods.supplyMedicine(id,new Date().getTime(),isSupply).send({from:await getAccount()})
}

async function getOrders(supplyChainAddress){
    let supplyChain = SupplyChain(supplyChainAddress)
    const promises = []
    const orderAmount=await supplyChain.methods.OrderAmount().call()
    for(let i=0;i<orderAmount;i++){
        promises.push(supplyChain.methods.Orders(i).call())
    }
    const orders=await Promise.all(promises)
    return orders
}

async function purchase(supplyChainAddress, location, amount){
    let supplyChain = SupplyChain(supplyChainAddress)
    const id = await supplyChain.methods.purchaseMedicine(amount, new Date().getTime(),location).call({from:await getAccount()})
    await supplyChain.methods.purchaseMedicine(amount, new Date().getTime(),location).send({from:await getAccount()})
    return id
}

async function approveMedicine(supplyChainAddress, isPass, information){
    let supplyChain = SupplyChain(supplyChainAddress)
    await supplyChain.methods.approveMedicine(isPass, new Date().getTime()).send({from:await getAccount()})
    if(isPass){
        await supplyChain.methods.provideInformation(information).send({from:await getAccount()})
    }

}

async function QCQA(supplyChainAddress, isInternal, isPass){
    let supplyChain = SupplyChain(supplyChainAddress)
    if(isInternal){
        await supplyChain.methods.internalQCQA(isPass, new Date().getTime()).send({from:await getAccount()})
    }else{
        await supplyChain.methods.externalQCQA(isPass, new Date().getTime()).send({from:await getAccount()})
    }
}

async function developMedicine(supplyChainAddress,name,price){
    let supplyChain = SupplyChain(supplyChainAddress)
    let time = new Date().getTime()
    const account = await getAccount()
    await supplyChain.methods.developMedicine(Number(price),name,Number(time)).send({from:account})
}

async function getSupplyChain(supplyChainAddress){
    let supplyChain = SupplyChain(supplyChainAddress)
    let infoPromises = []
    infoPromises.push(supplyChain.methods.getMedicine().call())
    infoPromises.push(supplyChain.methods.chainStartTime().call())
    infoPromises.push(supplyChain.methods.chainEndTime().call())
    infoPromises.push(supplyChain.methods.externalQCACAddress().call())
    infoPromises.push(supplyChain.methods.internalQCQAAddress().call())
    infoPromises.push(supplyChain.methods.pharmaceuticalCompanyAddress().call())
    infoPromises.push(supplyChain.methods.healthDepartmentAddress().call())
    const medicine_start_end_addresses = await Promise.all(infoPromises)
    const medicineInfo = medicine_start_end_addresses[0]
    let info ={
        address:supplyChainAddress,
        start:  new Date(Number(medicine_start_end_addresses[1])).toLocaleString().split(", "),
        end: new Date(Number(medicine_start_end_addresses[2])).toLocaleString().split(", "),
        id:medicineInfo[0],
        price:medicineInfo[5]==="0"?undefined:medicineInfo[1],
        name:medicineInfo[2],
        infomation:medicineInfo[3],
        developed:medicineInfo[5]==="0"?undefined:medicineInfo[4],
        developedTime:medicineInfo[5],
        internalQCQA:medicineInfo[7]==="0"?undefined:medicineInfo[6],
        internalQCQATime:medicineInfo[7],
        externalQCQA:medicineInfo[9]==="0"?undefined:medicineInfo[8],
        externalQCQATime:medicineInfo[9],
        approved:medicineInfo[11]==="0"?undefined:medicineInfo[10],
        approvedTime:medicineInfo[11],
        externalQCACAddress:medicine_start_end_addresses[3],
        internalQCQAAddress:medicine_start_end_addresses[4],
        pharmaceuticalCompanyAddress:medicine_start_end_addresses[5],
        healthDepartmentAddress:medicine_start_end_addresses[6],
    }
    return info
}

export {getSupplyChain, developMedicine, QCQA, approveMedicine,purchase,getOrders, supply}