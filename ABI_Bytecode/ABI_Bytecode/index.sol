//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0<0.9.0;

contract demo{
    unit public x =10;

    function set(unit _x) public{
        x = _x;
    }
}