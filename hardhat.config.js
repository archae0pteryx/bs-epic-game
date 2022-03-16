require('dotenv').config()

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_TESTNET_URL,
      accounts: [process.env.ACCOUNT_PRIK],
    },
  },
};
