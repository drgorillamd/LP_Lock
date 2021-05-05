const Migrations = artifacts.require("Migrations");
const LP_lock = artifacts.require("LP_lock");

module.exports = function(deployer) {
	deployer.deploy(Migrations);
	deployer.deploy(LP_lock);
};
