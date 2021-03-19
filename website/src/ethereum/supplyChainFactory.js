import {getAccount, SupplyChainFactory} from './web3'
import {getSupplyChain} from './supplyChain'
async function getSupplyChains(){
    const count = await SupplyChainFactory.methods.count().call()
    let addressPromises = []
    let supplyChainInfoPromises = []
    for(let i = 0; i < count; i++){
        addressPromises.push(SupplyChainFactory.methods.deployedSupplyChain(i).call())
    }
    let addresses = await Promise.all(addressPromises)
    addresses.forEach(address =>{
        supplyChainInfoPromises.push(getSupplyChain(address))
    }
    )
    let supplyChainInfos = await Promise.all(supplyChainInfoPromises)
    return supplyChainInfos
}

async function createSupplyChain({start,end,externalQCQAAddress,internalQCQAAddress,pharmaceuticalCompanyAddress,healthDepartmentAddress}){
    const account = await getAccount()
    await SupplyChainFactory.methods.createSupplyChain(start, end, externalQCQAAddress,internalQCQAAddress,pharmaceuticalCompanyAddress,healthDepartmentAddress).send({
        from:account
    })
}

export {getSupplyChains, createSupplyChain};