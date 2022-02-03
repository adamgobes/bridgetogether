// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import { L1StandardBridge } from "@eth-optimism/contracts/L1/messaging/L1StandardBridge.sol";

contract BridgeTogether {
    mapping(address => uint256) balances;
    address[] depositors;
    uint256 totalDeposits;

    event LogDeposit(address accountAddress, uint256 amount);
    event LogWithdraw(address accountAddress, uint256 amount);
    event LogBalance(address accountAddress, uint256 amount);

    L1StandardBridge public ovmL1StandardBridge;

    // instantiate BridgeTogether with OVM-related bridge contracts
    constructor(address payable _ovmL1StandardBridge) {
        ovmL1StandardBridge = L1StandardBridge(_ovmL1StandardBridge);
    }

    function deposit() public payable {
        balances[msg.sender] += msg.value;
        totalDeposits += msg.value;
        depositors.push(msg.sender);
        emit LogDeposit(msg.sender, msg.value);
        logBalance();
    }

    function withdraw(uint256 _amount) public {
        require(
            _amount <= balances[msg.sender],
            "You can't withdraw more than your balance"
        );

        balances[msg.sender] -= _amount;
        totalDeposits -= _amount;
        payable(msg.sender).transfer(_amount);
        emit LogWithdraw(msg.sender, _amount);
        logBalance();
    }

    function logBalance() internal {
        uint256 balance = getBalance();
        emit LogBalance(msg.sender, balance);
    }

    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    function getContractDeposits() public view returns (uint256) {
        return totalDeposits;
    }

    function bridge(address destination) payable external returns (bool) {
        require(totalDeposits > 0, "Insufficient funds to bridge");

        bytes memory b;
        ovmL1StandardBridge.depositETHTo{value: totalDeposits}(destination, 1300000, b);

        // reset state of address -> balances mapping
        for (uint32 i = 0; i < depositors.length; i++) {
            delete balances[depositors[i]];
        }

        // reset 
        totalDeposits = 0;
        return true;
    }

    fallback() external payable {}
    receive() external payable {}
}
