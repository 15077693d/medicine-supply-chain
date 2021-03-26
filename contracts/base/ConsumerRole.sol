// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "../object/Order.sol";
contract ConsumerRole is Order{
    // Pharmacies
    function purchaseMedicine(uint256 _amount, uint256 _orderTime,string memory _pharmacyPhysicalAddress) public returns(uint256){
        return addOrder(msg.sender, _amount, _orderTime,_pharmacyPhysicalAddress);
    }
}