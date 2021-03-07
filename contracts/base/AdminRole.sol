// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface AdminRole{
    // health department
    function provideInformation(string calldata information) external;
    function approveMedicine() external;
}