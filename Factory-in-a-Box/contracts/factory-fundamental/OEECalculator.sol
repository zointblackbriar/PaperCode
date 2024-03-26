// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7; 
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract OEECalculator {
    using SafeMath for uint256;
    uint256 public operatingTime;
    uint256 public scheduledProductionTime;
    uint256 public totalUnitsProduced;
    uint256 public goodUnits;
    uint256 public result;

    event OEEUpdated (uint256 availability, uint256 performance, uint256 quality, uint256 oee);

    function recordOperatingTime(uint256 _time) public {
        operatingTime += _time;
        // updateOEE();
        
    }

    function setScheduledProductionTime(uint256 _time) public {
        scheduledProductionTime = _time;
        // updateOEE();
    }

    function recordProduction(uint256 _totalUnits, uint256 _goodUnits) external {
        totalUnitsProduced += _totalUnits;
        goodUnits += _goodUnits;
        // updateOEE();
    }


    function updateOEE() public {
        // use safemath in order to provide error-free which are regarding to overflow and underflow errors.
        uint256 availability = (operatingTime.mul(100)).div(scheduledProductionTime);
        uint256 performance = (totalUnitsProduced.mul(100)).div(operatingTime.mul(1 ether));
        uint256 quality = (goodUnits.mul(100)).div(totalUnitsProduced);
        uint256 oee = (availability.mul(performance).mul(quality)).div(10000);

        result = oee;

        emit OEEUpdated(availability, performance, quality, oee);

    }

}