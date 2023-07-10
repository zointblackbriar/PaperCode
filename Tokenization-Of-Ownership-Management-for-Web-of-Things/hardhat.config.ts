import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
// import '@nomiclabs/hardhat-waffle'
// require("@nomiclabs/hardhat-waffle");

require('dotenv').config();


const API_KEY: string = process.env.REACT_APP_API_KEY || '';; // okay

// task action function receives the Hardhat Runtime Environment as second argument
// this is a test for hardhat-ethers
// task(
//   "blockNumber",
//   "Prints the current block number",
//   async (_, { ethers }) => {
//     await ethers.provider.getBlockNumber().then((blockNumber) => {
//       console.log("Current block number: " + blockNumber);
//     });
//   }
// );


const config: HardhatUserConfig = {

  

  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      // {
      //   version: "0.4.24",
      //   settings: {
      //     optimizer: {
      //       enabled: true,
      //       runs: 1000,
      //     },
      //   },
      // },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.6.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
   

    
  },
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,

    chainId: 1337
    },
    // alfajores: {
    //   url: "https://alfajores-forno.celo-testnet.org",
    //    accounts: [API_KEY],
    //    allowUnlimitedContractSize: true,    
    // },
 
    localhost:{
      allowUnlimitedContractSize: true,
      //accounts: [process.env.private_key],
    }
  },
};

export default config;
