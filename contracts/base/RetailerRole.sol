// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "../object/Order.sol";
contract RetailerRole is Order {
    // Pharmaceutical Companies
    function developMedicine( 
                uint256 _price,
                string memory _name,uint256 _developedTime) public isPharmaceuticalCompany(msg.sender){
        medicine.price = _price;
        medicine.name = _name;
        medicine.developedTime = _developedTime;
        medicine.developed = true;
    }
    
    function supplyMedicine(uint256 _orderId, uint256 _supplyTime, bool _supplied)  public isPharmaceuticalCompany(msg.sender){
        Orders[_orderId].supplied = _supplied;
        Orders[_orderId].supplyTime = _supplyTime;
    }
} 