// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "../object/Order.sol";
contract ConsumerRole is Order{
    // Pharmacies
    function purchaseMedicine(uint256 _amount, uint256 _orderTime) public{
        addOrder(msg.sender, _amount, _orderTime);
    }
}