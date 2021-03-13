// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./SupplyChain.sol";
contract SupplyChainFactory{
    address[] public deployedSupplyChain;
    uint256 public count=0;
    function createSupplyChain(uint256 _chainStartTime, uint256 _chainEndTime) public{
        SupplyChain newSupplyChain =new SupplyChain(_chainStartTime, _chainEndTime);
        deployedSupplyChain.push(address(newSupplyChain));
        count++;
    }
}