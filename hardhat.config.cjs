require('dotenv').config(); // To load environment variables from the .env file
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27", // Solidity version
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_API_URL, // The URL of your Alchemy API for Sepolia
      accounts: [process.env.PRIVATE_KEY], // Your wallet's private key
    },
  },
};
