// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Medicine {
    _Medicine public medicine;
    struct _Medicine {
        uint256 id;
        uint256 price;
        string name;
        string infomation;
        uint256 developedTime;
        bool internalQCQA;
        uint256 internalQCQATime;
        bool externalQCQA;
        uint256 externalQCQATime; 
        bool approved;
        uint256 approvedTime;
    }
    function setMedicine(
                uint256 _id,
                uint256 _price,
                string memory _name,
                string memory _infomation,
                uint256 _developedTime,
                bool _internalQCQA,
                uint256 _internalQCQATime,
                bool _externalQCQA,
                uint256 _externalQCQATime,
                bool _approved,
                uint256 _approvedTime) public{
        medicine = _Medicine(
                        _id,
                        _price,
                        _name,
                        _infomation,
                        _developedTime,
                        _internalQCQA,
                        _internalQCQATime,
                        _externalQCQA,
                        _externalQCQATime,
                        _approved,
                        _approvedTime);
    }
    function getMedicine() public view returns(uint256,uint256,string memory,string memory,uint256,bool,uint256,bool,uint256,bool,uint256){
        return (
            medicine.id,
            medicine.price,
            medicine.name,
            medicine.infomation,
            medicine.developedTime,
            medicine.internalQCQA,
            medicine.internalQCQATime,
            medicine.externalQCQA,
            medicine.externalQCQATime,
            medicine.approved,
            medicine.approvedTime
        );
    }
}