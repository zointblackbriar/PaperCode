const ProductionConfigurator = artifacts.require("ProductionConfigurator");

module.exports = function (deployer) {
  deployer.deploy(ProductionConfigurator);
};
