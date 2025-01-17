require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-truffle5');
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-web3");

require('dotenv').config()
// console.log(process.env)

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.7", 
    settings: {
      optimizer: {
        enabled: true,
        runs : 200
      }
    }
  },
  
  gasReporter: {
    enabled: true, // gasReporter enabled
    outputFile: "gas-report-testcases.txt",
    noColors: true,
  },
  networks:  {
    hardhat: {
    },
    // goerli: {
    //   url: process.env.ALCHEMY_MAINNET_RPC_URL,
    // },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    paths: {
      sources: './contracts',
      tests: './test',
      url: 'http://127.0.0.1:8545',
      cache: './cache',
      artifacts: './artifacts',
    },
  }
};
