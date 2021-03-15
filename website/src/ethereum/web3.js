import Web3 from 'web3';
import SupplyChainFactoryJson from './contracts/SupplyChainFactory.json'
console.log(SupplyChainFactoryJson)
let web3;
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    // We are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider,null,null);
} else {
    // We are on the Server OR the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
      "http://localhost:8545/"
    );
    web3 = new Web3(provider,null,null);
}

const SupplyChainFactory = new web3.eth.Contract(
  SupplyChainFactoryJson.abi,
  "0xCA77e6b4fBB6a6fee2CC8842D9f5c02B90bdE784"
)

SupplyChainFactory.methods.count().call().then(
  result => console.log(result)
)
export {web3, SupplyChainFactory};