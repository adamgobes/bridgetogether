//SPDX-License-Identifier: Unlicense
pragma solidity ^0.6.12;

import "hardhat/console.sol";

contract BridgeTogether {
    string private greeting;

    // contains state of all balances
    mapping(address => mapping(address => uint)) public balances;

    // 

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;

        // Not necessarily needed, but a nice-to-have
        // uint chainId;
        // assembly {
        //     chainId := chainid
        // }
    }

    /* 
     * External functions
     */
    function greet() public view returns (string memory) {
        return greeting;
    }

    // https://github.com/hop-protocol/contracts/blob/master/contracts/bridges/L1_Bridge.sol#L120-L127 
    function bridge() {
        
    }

    function deposit(address token, uint256 amount, address destinationAddress, uint256 chainId) external payable returns (bool) {
        
        return true
    }

    /* 
     * Internal functions
     */
    function _bridge() {

    }

    function _deposit(address from, address token, uint256 amount, address destinationAddress, uint256 chainId) internal {
        emit Deposit(from, token, amount, destinationAddress, chainId);
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }

    // required modifiers
    // ensure you're on the correct chain?

    /*
     * Events
     */
    event Deposit(address from, address token, uint256 amount, address destinationAddress, uint256 chainId);
}
