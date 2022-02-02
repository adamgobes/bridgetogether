// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

// import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import { L1StandardBridge } from "@eth-optimism/contracts/L1/messaging/L1StandardBridge.sol";

/** DEPLOYED CONTRACTS **/
// https://github.com/ethereum-optimism/optimism/tree/develop/packages/contracts/deployments/kovan
// kovan l1 standard bridge: 0x22f24361d548e5faafb36d1437839f080363982b

contract BridgeTogether {
    L1StandardBridge public ovmL1StandardBridge;
    
    address payable public owner;
    // mapping(address => uint256) internal balances;
    // mapping(address => uint256) internal l2balances;

    // instantiate BridgeTogether with OVM-related bridge contracts
    constructor(address payable _ovmL1StandardBridge) {
        owner = payable(msg.sender);
        ovmL1StandardBridge = L1StandardBridge(_ovmL1StandardBridge);
    }

    // currently this bridge is designed to send funds to the sender's address on the destination chain (optimism)
    function bridge() payable external returns (bool) {
        bytes memory b;
        // see https://github.com/ethereum-optimism/optimism/blob/ceea12f3fa542998eacbc4033ca5693b80117c14/packages/contracts/contracts/L1/messaging/L1StandardBridge.sol#L90
        ovmL1StandardBridge.depositETHTo{value: msg.value}(msg.sender, 1300000, b);

        return true;
    }

    fallback() external payable {  }

    receive() external payable {  }
}

/*** Required for crosschain arbitrary messaging ***/
// import "@eth-optimism/contracts/libraries/constants/Lib_PredeployAddresses.sol";
// import { L1CrossDomainMessenger } from "@eth-optimism/contracts/L1/messaging/L1CrossDomainMessenger.sol";

// https://community.optimism.io/docs/developers/bridge/messaging/#l1-%E2%87%94-l2-communication-basics
// https://github.com/ethereum-optimism/optimism/blob/master/packages/contracts/contracts/L1/messaging/L1CrossDomainMessenger.sol
// kovan l1 cross domain messenger: 0xaF91349fdf3B206E079A8FcaB7b8dFaFB96A654D