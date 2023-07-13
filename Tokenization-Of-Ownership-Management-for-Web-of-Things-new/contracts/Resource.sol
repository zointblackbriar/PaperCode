import "./AdministrativeRoles/Verifier.sol";
import "./AdministrativeRoles/Issuer.sol";
import "./WebofThingsDevice.sol";

contract Resource {
    string name;
    WebofThingsDevice webofthings;

    event ResourceCreated();

    //  Verifier verifier = new Verifier();
    constructor(string memory contractName) payable{
         name = contractName;
    }

    function getName() public view returns (string memory) {
        return name;
    }

    function createResource(
        string memory resource_name,
        string memory role,
        uint256 tokenUri,
        address verifier,
        address issuer,
        address account
    ) public returns (bool) {
         // sample wot device in resource
         webofthings.wotPropertyAssigner(address(msg.sender), "samplewotname", "samplewotdescription", "samplewotspec");
    }

    function updateResource(
        string memory name,
        string memory role,
        uint256 access_type,
        string memory tokenUri
    ) public {
    }

    function deleteResource(
        string memory name,
        string memory role,
        uint256 access_type,
        string memory tokenUri
    ) public {
        //  bool result = verifier.verify(access_type,role, name, tokenUri);
        // if(result){
        //     emit ResourceCreated();
        // }
        // else{
        // }
    }

    function readResource(
        string memory name,
        string memory role,
        uint256 access_type,
        string memory tokenUri
    ) public {
        //      bool result = verifier.verify(access_type,role, name, tokenUri);
        //     if(result){
        //         emit ResourceCreated();
        //     }
        //     else{
        //     }
    }
}
