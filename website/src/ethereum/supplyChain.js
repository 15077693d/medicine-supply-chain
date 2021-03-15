import {web3,SupplyChainFactory} from './web3'

async function getSupplyChainAddress(){
    return await SupplyChainFactory.methods.count().call()
}

export {getSupplyChainAddress};