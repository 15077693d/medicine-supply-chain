// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface DistributorRole{
    // QCQA
    function internalQCQA(bool isPass) external;
    function externalQCQA(bool isPass) external;
} 