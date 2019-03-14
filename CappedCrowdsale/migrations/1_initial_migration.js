const Migrations = artifacts.require("Migrations");
var ExampleToken = artifacts.require("./ExampleToken.sol");
var ExampleTokenCrowdsale = artifacts.require("./ExampleTokenCrowdsale.sol");



module.exports = async function(deployer , network , accounts) {
 deployer.deploy(Migrations);
 var token = deployer.deploy(ExampleToken,"CSC6890 Token", "GSU", 18).then(() => ExampleToken.deployed())
  .then(token =>   deployer.deploy(ExampleTokenCrowdsale,450, accounts[0], token.address , new web3.utils.BN(web3.utils.toWei('150', 'ether'))));




  
}