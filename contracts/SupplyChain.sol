// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./base/AdminRole.sol";
import "./base/ConsumerRole.sol";
import "./base/DistributorRole.sol";
import "./base/RetailerRole.sol";
import "./Ownable.sol";

contract SupplyChain is  AdminRole, ConsumerRole, DistributorRole, RetailerRole, Ownable{
    struct Medicine {
        string name;
        string infomation;
        uint256 chainStartTime;
        uint256 developedTime;
        bool internalQCQA;
        uint256 internalQCQATime;
        bool externalQCQA;
        uint256 externalQCQATime; 
        bool approved;
        uint256 approvedTime;
    }
    struct Order {
        uint256 id;
        address pharmacyAddress;
        uint256 amount;
        bool supplied;
        uint256 orderTime;
        uint256 supplyTime;
    }
    Medicine public medicine;
    constructor(string memory _name,
                string memory _infomation,
                uint256 _chainStartTime,
                uint256 _developedTime,
                bool _internalQCQA,
                uint256 _internalQCQATime,
                bool _externalQCQA,
                uint256 _externalQCQATime,
                bool _approved,
                uint256 _approvedTime) public{
        medicine = Medicine(
                        _name,
                        _infomation,
                        _chainStartTime,
                        _developedTime,
                        _internalQCQA,
                        _internalQCQATime,
                        _externalQCQA,
                        _externalQCQATime,
                        _approved,
                        _approvedTime);
    }
    mapping(uint256 => Order) public Orders;
    function trackChain() public view returns(string memory,string memory,uint256,uint256,bool,uint256,bool,uint256,bool,uint256){
        return (
            medicine.name,
            medicine.infomation,
            medicine.chainStartTime,
            medicine.developedTime,
            medicine.internalQCQA,
            medicine.internalQCQATime,
            medicine.externalQCQA,
            medicine.externalQCQATime,
            medicine.approved,
            medicine.approvedTime
        );
    }
    function provideInformation(string memory information) public override{}
    function approveMedicine() public override{}
    function purchaseMedicine(uint256 amount) public override{}
    function internalQCQA(bool isPass) public override{}
    function externalQCQA(bool isPass) public override{}
    function developMedicine() public override{}
    function supplyMedicine(address pharmaciesAddress) public override{}
}