// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./SupplyChain.sol";
contract SupplyChainFactory{
    address[] public deployedSupplyChain;
    uint256 public count=0;
    function createSupplyChain(uint256 _chainStartTime, uint256 _chainEndTime,address _externalQCACAddress,address _internalQCQAAddress,address _pharmaceuticalCompanyAddress,address _healthDepartmentAddress) public{
        SupplyChain newSupplyChain =new SupplyChain(_chainStartTime, _chainEndTime);
        deployedSupplyChain.push(address(newSupplyChain));
        newSupplyChain.setExternalQCQA(_externalQCACAddress);
        newSupplyChain.setInternalQCQA(_internalQCQAAddress);
        newSupplyChain.setPharmaceuticalCompany(_pharmaceuticalCompanyAddress);
        newSupplyChain.setHealthDepartment(_healthDepartmentAddress);
        count++;
    }
}