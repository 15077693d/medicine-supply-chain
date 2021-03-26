// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./base/AdminRole.sol";
import "./base/ConsumerRole.sol";
import "./base/DistributorRole.sol";
import "./base/RetailerRole.sol";

contract SupplyChain is  AdminRole, ConsumerRole, DistributorRole, RetailerRole{
    uint256 public chainStartTime;
    uint256 public chainEndTime;
    constructor(uint256 _chainStartTime, uint256 _chainEndTime){
        chainStartTime=_chainStartTime;
        chainEndTime=_chainEndTime;
    }
}