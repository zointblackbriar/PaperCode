// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "hardhat/console.sol";


// @dev Interface definition for the component
interface IComponent{
    function getName() external payable returns (string memory);
    function getAge() external  payable returns (uint256);
    function addRole(address account, ComponentRole componentrole) external returns (bool);
    function hasRole(address account, ComponentRole componentrole) external returns (bool);

 }

contract ComponentCore is IComponent {

    struct NFT_METADATA {
        string name;
        string access_type;
    }
    string name;
    uint age;
    mapping(address => ComponentRole)  role;

    constructor  (string memory name1,uint age1) {
     name = name1;
     age = age1;
    }

    function getConractAddressComponetCore() public view returns(address){
        return address(this);
    }

    function abc() public view returns(string memory){
        return name;
    }

    function getName() public  virtual override payable returns (string memory){
        //console.log("test");
        return name;

    }
    function getAge() public  virtual override payable returns (uint256){
        return age;
    }

    function addRole(address account, ComponentRole componentrole) public virtual override returns(bool) {
        role[account] = componentrole;
        if (role[account]==componentrole){
            return true;
        }
       // console.log("account of the EmployeeCore role", account);

    }
    function hasRole(address role_address, ComponentRole object)public view  virtual override returns (bool){
        if (role[role_address]==object){
            return true;
        }
        else{
            return false;
        }


    }

}

abstract contract ComponentRole is IComponent{
    //EmployeeCore core;
    IComponent public  core;
    function getName()  override public payable  returns (string memory){
    return core.getName();
    }

    function getAge() override public payable  returns (uint256){
    return core.getAge();
    }


    function addRole(address account, ComponentRole componentrole) public override returns (bool){
        core.addRole(account,componentrole);
        console.log("account of the EmployeeRole role", account);
    }

    function hasRole(address account, ComponentRole componentrole)public override returns(bool){
        return core.hasRole(account, componentrole);
    }

    function getContractAddressEmployeeRole() public view returns(address) {
        return address(this);
    }
}

    // contract HelperContract {
    //     function foo() public pure returns(uint) {
    //         return(0);
    //     }
    // }

    // contract MainContract {
    //     HelperContract helperContract;

    //     constructor(address helperAddress)  {
    //         helperContract = HelperContract(helperAddress);
    //     }

    //     function bar() public view returns(uint) {
    //         return helperContract.foo();
    //     }
    // }