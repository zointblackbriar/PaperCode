import "./AdministrativeRoles/Verifier.sol";
import "./AdministrativeRoles/Issuer.sol";


contract Resource {
    string name;

    event ResourceCreated();

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
    }

    function readResource(
        string memory name,
        string memory role,
        uint256 access_type,
        string memory tokenUri
    ) public {
    }
}
