import {getAccount,SupplyChainFactory} from './web3'

async function getSupplyChain(){
    return await SupplyChainFactory.methods.count().call()
}

async function createSupplyChain({start,end,externalQCQAAddress,internalQCQAAddress,pharmaceuticalCompanyAddress,healthDepartmentAddress}){
    const account = await getAccount()
    SupplyChainFactory.methods.createSupplyChain(start, end, externalQCQAAddress,internalQCQAAddress,pharmaceuticalCompanyAddress,healthDepartmentAddress).send({
        from:account
    })
}

export {getSupplyChain, createSupplyChain};