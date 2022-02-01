pragma solidity 0.8.11;

contract BridgeTogether {
    address payable public owner;
    mapping(address => uint256) balances;
    mapping(address => uint256) l2balances;

    constructor() {
        owner = payable(msg.sender);
    }

    function deposit() public payable {
        balances[msg.sender] += msg.value;
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
