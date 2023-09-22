//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

//could be deprecated
contract CellAgent {
	
	address public owner; 

	constructor() {
		owner = msg.sender; 
	}
}