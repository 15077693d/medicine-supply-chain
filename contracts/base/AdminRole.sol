// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "../object/Order.sol";
contract AdminRole is Order{
    // health department
    function provideInformation(string memory information) public isHealthDepartmentAddress(msg.sender){
        medicine.infomation = information;
    }
    function approveMedicine() public isHealthDepartmentAddress(msg.sender){
        medicine.approved = true;
    }
}