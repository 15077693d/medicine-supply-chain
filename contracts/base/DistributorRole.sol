// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "../object/Order.sol";
contract DistributorRole is  Order{
    // QCQA
    function internalQCQA(bool isPass, uint256 _internalQCQATime) public isInternalQCQAAddress(msg.sender){
        medicine.internalQCQA = isPass;
        medicine.internalQCQATime = _internalQCQATime;
    }
    function externalQCQA(bool isPass, uint256 _externalQCQATime) public isExternalQCACAddress(msg.sender){
        medicine.externalQCQA = isPass;
        medicine.externalQCQATime = _externalQCQATime;
    }
} 