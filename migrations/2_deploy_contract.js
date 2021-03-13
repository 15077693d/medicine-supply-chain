// main
const SupplyChain = artifacts.require("SupplyChain");
const Ownable = artifacts.require("Ownable")
const SupplyChainFactory = artifacts.require("SupplyChainFactory");
// object
const Medicine = artifacts.require("Medicine")
const Order = artifacts.require("Order")
// base
const AdminRole = artifacts.require("AdminRole")
const ConsumerRole = artifacts.require("ConsumerRole")
const DistributorRole = artifacts.require("DistributorRole")
const RetailerRole = artifacts.require("RetailerRole")

const _price=123
const _name="123"
const _infomation="123"
const _developedTime=123
const _internalQCQA="123"
const _internalQCQATime=123
const _externalQCQA="123"
const _externalQCQATime=123
const _approved=true
const _approvedTime=12
module.exports = function (deployer) {
  // main
  deployer.deploy(SupplyChain,10,100);
  deployer.deploy(Ownable);
  deployer.deploy(SupplyChainFactory)
  // object
  deployer.deploy(Medicine);
  deployer.deploy(Order);
  // base
  deployer.deploy(AdminRole);
  deployer.deploy(ConsumerRole);
  deployer.deploy(DistributorRole);
  deployer.deploy(RetailerRole);

};