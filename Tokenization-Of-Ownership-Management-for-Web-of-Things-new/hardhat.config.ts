import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'

require('dotenv').config();


const API_KEY: string = process.env.REACT_APP_API_KEY || '';; // okay


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
      {
        version: "0.4.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
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
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },

    ],
   

    
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report-testcases.txt",
    noColors:true,
    token: "ETH",
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
