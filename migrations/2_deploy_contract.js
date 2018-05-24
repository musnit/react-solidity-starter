var ExampleContract = artifacts.require("./ExampleContract.sol");

module.exports = function(deployer) {
  deployer.deploy(ExampleContract);
};
