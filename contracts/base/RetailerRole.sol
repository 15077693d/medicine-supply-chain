// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface RetailerRole{
    // Pharmaceutical Companies
    function developMedicine() external;
    function supplyMedicine(address pharmaciesAddress) external;
} 