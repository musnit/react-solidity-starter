var HDWalletProvider = require("truffle-hdwallet-provider");
//var secrets = require("./secrets.js");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4712388,
      gasPrice: 1,
    },
/*    ropsten: {
      provider: new HDWalletProvider(secrets.mnemonic, "https://ropsten.infura.io/" + secrets.infura_apikey),
      network_id: 3,
      gas: 2708980,
      gasPrice: 1,
    } */
  }
};
