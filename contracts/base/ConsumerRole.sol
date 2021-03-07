// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface ConsumerRole{
    // Pharmacies
    function purchaseMedicine(uint256 amount) external;
}