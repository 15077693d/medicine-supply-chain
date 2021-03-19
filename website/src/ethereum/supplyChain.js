import {SupplyChain} from './web3'


async function getSupplyChain(supplyChainAddress){
    let supplyChain = SupplyChain(supplyChainAddress)
    let infoPromises = []
    infoPromises.push(supplyChain.methods.getMedicine().call())
    infoPromises.push(supplyChain.methods.chainStartTime().call())
    infoPromises.push(supplyChain.methods.chainEndTime().call())
    const medicine_start_end = await Promise.all(infoPromises)
    const medicineInfo = medicine_start_end[0]
    let info ={
        address:supplyChainAddress,
        start:  new Date(Number(medicine_start_end[1])).toLocaleString().split(", "),
        end: new Date(Number(medicine_start_end[2])).toLocaleString().split(", "),
        id:medicineInfo[0],
        price:medicineInfo[1],
        name:medicineInfo[2],
        infomation:medicineInfo[3],
        developed:medicineInfo[5]==="0"?undefined:medicineInfo[4],
        developedTime:medicineInfo[5],
        internalQCQA:medicineInfo[7]==="0"?undefined:medicineInfo[6],
        internalQCQATime:medicineInfo[7],
        externalQCQA:medicineInfo[9]==="0"?undefined:medicineInfo[8],
        externalQCQATime:medicineInfo[9],
        approved:medicineInfo[11]==="0"?undefined:medicineInfo[10],
        approvedTime:medicineInfo[11]
    }
    return info
}

export {getSupplyChain}