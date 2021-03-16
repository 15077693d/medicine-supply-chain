// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Ownable{
    address public externalQCACAddress;
    address public internalQCQAAddress;
    address public pharmaceuticalCompanyAddress;
    address public healthDepartmentAddress;
    
    modifier isPharmaceuticalCompany(address _pharmaceuticalCompanyAddress){
        require(pharmaceuticalCompanyAddress==_pharmaceuticalCompanyAddress);
        _;
    }

     modifier isInternalQCQAAddress(address _internalQCQAAddress){
        require(internalQCQAAddress==_internalQCQAAddress);
        _;
    }

     modifier isExternalQCACAddress(address _externalQCACAddress){
        require(externalQCACAddress==_externalQCACAddress);
        _;
    }

     modifier isHealthDepartmentAddress(address _healthDepartmentAddress){
        require(healthDepartmentAddress==_healthDepartmentAddress);
        _;
    }

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