// main
const SupplyChainFactory = artifacts.require("SupplyChainFactory");

module.exports = function (deployer) {
  // main
  deployer.deploy(SupplyChainFactory)
};