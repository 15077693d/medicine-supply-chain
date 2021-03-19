import Web3 from 'web3';
import SupplyChainFactoryJson from './contracts/SupplyChainFactory.json'
import SupplyChainJson from './contracts/SupplyChain.json'
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
  "0x79010cE1cD629a528Bfb62E80Fcb93F863c312cB"
)

const SupplyChain = (supplyChainAddress) => new web3.eth.Contract(
  SupplyChainJson.abi,
  supplyChainAddress
)

const getAccount = async () => {
  const accounts = await web3.eth.getAccounts()
  return accounts[0]
}

export {web3, SupplyChainFactory,SupplyChain, getAccount};