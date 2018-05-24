var ExampleContract = artifacts.require("./ExampleContract.sol");

contract('ExampleContract', function(accounts) {
    var owner = web3.eth.accounts[0];
    var account1 = web3.eth.accounts[1];
    var account2 = web3.eth.accounts[2];
    var account3 = web3.eth.accounts[3];

    it("should mint tokens to player 1", function() {
      return ExampleContract.deployed().then(function(instance) {
        instance.mint(account1, 100 , {from:owner}).then(function (res) {
          instance.balanceOf.call(account1).then(function (balance) {
            assert.equal(balance, 100, "failed to mint the correct number of tokens for Player 1");
          });
        });
      });
    });

    it("should mint tokens for player 2, player 3", function () {
      return ExampleContract.deployed().then(function(instance) {
        instance.mint(account2, 201 , { from: owner }).then(function (res) {
          instance.mint(account3, 100 , { from: owner }).then(function (res) {
            instance.balanceOf.call(account2).then(function (balance2) {
              instance.balanceOf.call(account3).then(function (balance3) {
                assert.equal(balance2, 201, "failed to mint the correct number of tokens for Player 2");
                assert.equal(balance3, 100, "failed to mint the correct number of tokens for Player 3");
                var staked2 = instance.stake(201, { from: account2 });
                var staked3 = instance.stake(100, { from: account3 });
              });
            });
          });
        });
      });
    })
});
