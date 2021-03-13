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
    }
    
    function supplyMedicine(uint256 _orderId, uint256 _supplyTime)  public isPharmaceuticalCompany(msg.sender){
        Orders[_orderId].supplied = true;
        Orders[_orderId].supplyTime = _supplyTime;
    }
} 