pragma solidity 0.8.11;

contract BridgeTogether {
    mapping(address => uint256) balances;

    event LogDeposit(address accountAddress, uint256 amount);
    event LogWithdraw(address accountAddress, uint256 amount);
    event LogBalance(address accountAddress, uint256 amount);

    function deposit() public payable {
        balances[msg.sender] += msg.value;
        emit LogDeposit(msg.sender, msg.value);
        logBalance();
    }

    function withdraw() public payable {
        require((balances[msg.sender] - msg.value) >= 0); // can't withdraw more than their balance

        balances[msg.sender] -= msg.value;
        emit LogWithdraw(msg.sender, msg.value);
        logBalance();
    }

    function logBalance() internal {
        uint256 balance = getBalance();
        emit LogBalance(msg.sender, balance);
    }

    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    function bridge() public {
        /**
		iterate balances
		copy to l2balances
		clear balances
	*/
    }
}
