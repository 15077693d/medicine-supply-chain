// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Ownable{
    address public pharmaceuticalCompanyAddress;
    address public internalQCQAAddress;
    address public externalQCACAddress;
    address public healthDepartmentAddress;
    
    function setPharmaceuticalCompany(address _pharmaceuticalCompanyAddress) public{
        pharmaceuticalCompanyAddress = _pharmaceuticalCompanyAddress;
    }
    
    function setInternalQCQA(address _internalQCQAAddress) public{
        internalQCQAAddress = _internalQCQAAddress;
    }
    
    function setExternalQCQA(address _externalQCACAddress) public{
        externalQCACAddress = _externalQCACAddress;
    }
    
    function setHealthDepartment(address _healthDepartmentAddress) public{
        healthDepartmentAddress = _healthDepartmentAddress;
    }
}