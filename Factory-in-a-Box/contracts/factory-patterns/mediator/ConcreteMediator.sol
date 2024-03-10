//SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 

// import "./Mediator.sol";
import "./Role.sol";
import "./RoleGenerator.sol";
import "./MediatorInterface.sol";
import "../../interfaceseparator/ERC165.sol";
import "../../interfaceseparator/ERC165Query.sol";
import "../../interfaceseparator/InterfaceIds.sol";

contract ConcreteMediator is MediatorInterface, ERC165Query, ERC165, RoleGenerator{
    // RoleReceiver private _roleReceiver;
    mapping(bytes32 => Role) public assignedRoles;
    bool public isMediator;
    event Logging(string description);
    string public sampleMessage;
    RoleGenerator rg;

    constructor() {
        sampleMessage = "Concrete Mediator message";
    }

    // implementation of the addRole
    // function addRole(bytes32 _roleSpecification, address _role) override public  {
    //     require(_role != address(0x0), "address should be different from null value");
    //     Role role = rg.roleGenerate(_roleSpecification);
    //     assignedRoles[_roleSpecification] = role;
    // }

    //implementation of the bindRole()
    // activation of the mediator address
    function bindRole(bytes32 _roleSpecification, address _role) override public {
        require(_role != address(0x0), "a role should have an address");
        // require(isMediatorRole, "Mediator has been activated");
        emit Logging("bindRole has been activated");
        isMediator = doesContractImplementInterface(
            _role, InterfaceIds.MEDIATOR_ID
        );
        require(isMediator, "Mediator has been activated");
        // Mediator mediator = new Mediator();

        // mediator.bindRole(_roleSpecification, _role);
    }

    function unbindRole(bytes32 _roleSpecification) override public {
        delete assignedRoles[_roleSpecification];
    }


    // implementation of the getRole()
    function getRole(bytes32 _roleSpecification) public override returns (Role role) {
        emit Logging("getRole has been activated");
        return assignedRoles[_roleSpecification];
    }      

    function setMediator(address _addressOfMediator) public returns(bool) {
        require(_addressOfMediator != address(0x0), "a address should have an address");
        isMediator = doesContractImplementInterface(
            _addressOfMediator, InterfaceIds.MEDIATOR_ID
        );
        require(isMediator, "Mediator has been activated");
        return true;
    }

    function supportsInterface(bytes4 interfaceID ) external pure override returns (bool) {
        return interfaceID == this.supportsInterface.selector || // ERC165 Separator
            // interfaceID == this.addRole.selector ^ this.bindRole.selector ^ this.invokeRole.selector ^ this.getRole.selector ; // Mediator.sol
            interfaceID == InterfaceIds.MEDIATOR_ID; //Mediator Pattern
    }


    function roleGenerate(bytes32 _roleSpecification) public override returns(Role) {
        return new Role(_roleSpecification);
    }


}



