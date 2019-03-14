# CappedCrowdsale-SmartContract

By Vignesh Varadarajan

Using Open-Zeppelin Library to build a basic capped ERC20 token sale.

# Install Solidity Compiler and Truffle 
```
> npm install solc@0.4.24
> npm install truffle
```


# Install openzeppelin-solidity
```
> npm install openzeppelin-solidity@1.12.0
```

# Compile, open truffle Develop and Migrate
```
> truffle compile
> truffle develop
> migrate --reset

> ExampleToken.deployed().then((t) => {token = t;})
> ExampleTokenCrowdsale.deployed().then((t) => {sale = t;})
> token.transferOwnership(sale.address) 
```

Now the ExampleToken and ExampleCrowdsaleToken contracts would be deployed.

```
 var token = deployer.deploy(ExampleToken,"CSC6890 Token", "GSU", 18).then(() => ExampleToken.deployed())
  .then(token =>   deployer.deploy(ExampleTokenCrowdsale,450, accounts[0], token.address , new web3.utils.BN(web3.utils.toWei('150', 'ether'))));

ExampleTokenCrowdsale.deployed(500, web3.eth.accounts[0], token.address , new web3.BigNumber(web3.toWei(200, 'ether'))).then((t) => {sale = t;})
```

1) Change the minimum contribution to 5 Ether. (20 points)

The minimum cap in the contract will be changed to 5 ether
```
uint256 public investorMinCap = 50000000000000000000;
```

2) Add method, getTokensLeft, to report how many tokens are left. (30 points)

```
  function getTokensLeft() public returns (uint256){
  	return balances[msg.sender];
  }
```
3) Graduate Students question: Add the needed functionality to not allow more than 1 purchase per
account. (40 points)

```
 function _preValidatePurchase(
    address _beneficiary,
    uint256 _weiAmount
  )
    internal
  {
    super._preValidatePurchase(_beneficiary, _weiAmount);
    uint256 _existingContribution = contributions[_beneficiary];
    //Graduate Question : This check is added to see that the existing user has not already made a contribution 
	require(_existingContribution == 0);
    uint256 _newContribution = _existingContribution.add(_weiAmount);
    require(_newContribution >= investorMinCap && _newContribution <= investorHardCap);
	contributions[_beneficiary] = _newContribution;     
  }
```
After you have successfully implemented, deployed and tested. You are to evaluate your contract with
the following parameters:
Token name: "CSC4980 Token" - "CSC6890 Token" for graduate students
Token symbol: "GSU"
Token decimals: 18
rate: 450 tokens x Ether
cap: 150 Ether
Now perform the following transactions:
1) Try to buy tokens with 2.5 ether (10 points)
```
sale.buyTokens(account1, {value : new web3.utils.BN(web3.utils.toWei('2.5', 'ether')) , from : account1});

```
2) Buy tokens with 15 ether (10 points)
```
sale.buyTokens(account1, {value : new web3.utils.BN(web3.utils.toWei('10', 'ether')) , from : account1});

```
```
This fails too as the user has already contributed.
With revert error
```
3) Return how many tokens are left (10 points)
```
token.getTokensLeft()
```
2716 tokems remaining

Graduate Students 4): Buy tokens (again) with 25 Ether (10 points)

```
sale.buyTokens(account1, {value : new web3.utils.BN(web3.utils.toWei('25', 'ether')) , from : account1});

```
This fails too as the user has already contributed.
With revert error


At any given time, the balance can be checked using
```
token.balanceOf(account0)
``


