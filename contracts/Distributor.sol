// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Distributor {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function distribute() external returns (bool) {
        address[] memory addresses = new address[](2);
        addresses[0] = 0xCBE0E7a521FCc83B84458ae82ADbD5b09cd8404b; // j
        addresses[1] = 0x323f5f8bC90ec6f01650dBE4a13D324Cf699FA3F; // a

        payable(addresses[0]).transfer(0.0123 ether);
        payable(addresses[1]).transfer(0.0321 ether);

        // if we get here, we assume we've been able to successfully transfer to everyone (otherwise, we would've reverted).
        emit DistributeComplete();

        return true;
    }

    event Transferred();
    event DistributeComplete();

    fallback() external payable {}
    receive() external payable {}
}
