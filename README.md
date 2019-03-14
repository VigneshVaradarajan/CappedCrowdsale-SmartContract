# CappedCrowdsale-SmartContract

Using Open-Zeppelin Library to build a basic capped ERC20 token sale.

# Install Solidity Compiler and Truffle 
```
> npm install solc
> npm install truffle
```


# Install openzeppelin-solidity
```
> npm install openzeppelin-solidity
```

# Compile, open truffle Develop and Migrate
```
> truffle compile
> truffle develop
>migrate --reset
```

Now the ExampleToken and ExampleCrowdsaleToken contracts would be deployed.

```
ExampleToken.deployed("Example Token", "EXM", 18).then((t) => {token = t;})
ExampleTokenCrowdsale.deployed(500, web3.eth.accounts[0], token.address , new web3.BigNumber(web3.toWei(200, 'ether'))).then((t) => {sale = t;})
```

1) Change the minimum contribution to 5 Ether. (20 points)

The minimum cap in the contract will be changed to 5 ether
```
uint256 public investorMinCap = 50000000000000000000;
```

2) Add method, getTokensLeft, to report how many tokens are left. (30 points)

```

```
3) Graduate Students question: Add the needed functionality to not allow more than 1 purchase per
account. (40 points)
After you have successfully implemented, deployed and tested. You are to evaluate your contract with
the following parameters:
Token name: "CSC4980 Token" - "CSC6890 Token" for graduate students
Token symbol: "GSU"
Token decimals: 18
rate: 450 tokens x Ether
cap: 150 Ether
Now perform the following transactions:
1) Try to buy tokens with 2.5 ether (10 points)
2) Buy tokens with 15 ether (10 points)
3) Return how many tokens are left (10 points)
Graduate Students 4): Buy tokens (again) with 25 Ether (10 points)


