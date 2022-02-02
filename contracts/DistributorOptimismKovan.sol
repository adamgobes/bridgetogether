// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Distributor {
    address payable public owner;

    /** Unused for now **/
    // mapping(address => uint256) internal balances;
    // mapping(address => uint256) internal l2balances;

    constructor() {
        owner = payable(msg.sender);
    }

    // invoking this function will simplyl send a preset amount of funds to the hardcoded addresses
    function distribute() external returns (bool) {
        // hardcoding addresses for now
        address[] memory addresses = new address[](2);
        addresses[0] = 0xC7c8E328eC7cE518e7E18D2f000aB6AA2CD93EdB; // jing
        addresses[1] = 0x19004bEC8b4B7AA949b1D94aEb22430381cd1b3F; // andrew

        for (uint8 i = 0; i < addresses.length; i++) {
            address payable addr = payable(addresses[i]); // https://ethereum.stackexchange.com/questions/64108/whats-the-difference-between-address-and-address-payable
            // addr.transfer(balances[addresses[i]] * 1 wei); // assume amounts is in wei
            addr.transfer(1 wei);

            // if transfer fails, the entire tx will revert, so it should be safe to reset balance at the same time
            // delete balances[addresses[i]];
            emit Transferred();
        }

        // if we get here, we assume we've been able to successfully transfer to everyone (otherwise, we would've reverted).
        emit DistributeComplete();

        return true;
    }

    event Transferred();
    event DistributeComplete();

    fallback() external payable {  }
    receive() external payable {  }
}