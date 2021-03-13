// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Medicine.sol";
import "../Ownable.sol";
contract Order is Medicine, Ownable{
    struct _Order {
        uint256 id;
        address pharmacyAddress;
        uint256 amount;
        bool supplied;
        uint256 orderTime;
        uint256 supplyTime;
    }
    uint256 public OrderId=0;
    mapping(uint256 => _Order) public Orders;
    function getOrderId() public view returns(uint256){
        return OrderId;
    }
    function addOrder(address _pharmacyAddress,uint256 _amount,uint256 _orderTime) public{
        Orders[OrderId] = _Order(
            OrderId,_pharmacyAddress,_amount,false,_orderTime,0
        );
        OrderId++;
    }
}