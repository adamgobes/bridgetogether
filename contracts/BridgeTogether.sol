pragma solidity 0.6.12;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "./external/HopContracts/contracts/bridges/L1_Bridge.sol";

contract BridgeTogether {
    address payable public owner;
    mapping(address => uint256) internal balances;
    mapping(address => uint256) internal l2balances;

    constructor() public {
        owner = payable(msg.sender);
    }

    function deposit() public payable returns (bool) {
        balances[msg.sender] = SafeMath.add(balances[msg.sender], msg.value);
        emit Deposit(msg.sender, msg.value);
        return true;
    }

    function getBalance(address _address) public view returns (uint256) {
        return balances[_address];
    }

    function distribute(address[] memory addresses) external returns (bool) {
        /**
		iterate balances
		copy to l2balances
		clear balances
	    */
        // 
        for (uint8 j = 0; j < addresses.length; j++) {
            address payable addr = payable(addresses[j]); // https://ethereum.stackexchange.com/questions/64108/whats-the-difference-between-address-and-address-payable
            addr.transfer(balances[addresses[j]] * 1 wei); // assume amounts is in wei

            // if transfer fails, the entire tx will revert, so it should be safe to reset balance at the same time
            delete balances[addresses[j]];
        }
        
        // if we get here, we assume we've been able to successfully transfer to everyone (otherwise, we would've reverted).
        emit Distribute();

        return true;
    }

    function bridge(uint256 amount, address destinationAddress, uint256 chainId) external returns (bool) {
        L1_Bridge.sendToL2{value: amount}(chainId, destinationAddress, amount);

        return true;
    }

    /*
     * Events
     */ 
    event Deposit(address recipient, uint256 amount);
    event Bridge();
    event Distribute();
}