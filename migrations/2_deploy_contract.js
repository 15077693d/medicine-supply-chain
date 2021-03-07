const SupplyChain = artifacts.require("./SupplyChain.sol");
const _name="123"
const _infomation="123"
const _chainStartTime=123
const _developedTime=123
const _internalQCQA="123"
const _internalQCQATime=123
const _externalQCQA="123"
const _externalQCQATime=123
const _approved=true
const _approvedTime=12
module.exports = function (deployer) {
  deployer.deploy(SupplyChain,_name,
                            _infomation,
                            _chainStartTime,
                            _developedTime,
                            _internalQCQA,
                            _internalQCQATime,
                            _externalQCQA,
                            _externalQCQATime,
                            _approved,
                            _approvedTime,);
};