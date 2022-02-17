export const TOKEN_CONTRACT_NAME = process.env.TOKEN_CONTRACT_NAME ||'aerx-token.innazh.testnet'
export const NFT_CONTRACT_NAME = process.env.NFT_CONTRACT_NAME ||'aerx-nft.innazh.testnet'

function getConfig(env, keyStore) {
  switch (env) {

  case 'production':
  case 'mainnet':
    return {
      networkId: 'mainnet',
      keyStore,
      nodeUrl: 'https://rpc.mainnet.near.org',
      walletUrl: 'https://wallet.near.org',
      helperUrl: 'https://helper.mainnet.near.org',
      explorerUrl: 'https://explorer.mainnet.near.org',
    }
  case 'development':
  case 'testnet':
    return {
      networkId: 'testnet',
      keyStore,
      nodeUrl: 'https://rpc.testnet.near.org',
      walletUrl: 'https://wallet.testnet.near.org',
      helperUrl: 'https://helper.testnet.near.org',
      explorerUrl: 'https://explorer.testnet.near.org',
    }
  case 'betanet':
    return {
      networkId: 'betanet',
      keyStore,
      nodeUrl: 'https://rpc.betanet.near.org',
      walletUrl: 'https://wallet.betanet.near.org',
      helperUrl: 'https://helper.betanet.near.org',
      explorerUrl: 'https://explorer.betanet.near.org',
    }
  case 'local':
    return {
      networkId: process.env.NEAR_CLI_LOCALNET_NETWORK_ID || 'local',
      nodeUrl: process.env.NEAR_NODE_URL || 'http://localhost:3030',
      keyPath: process.env.NEAR_CLI_LOCALNET_KEY_PATH || `${process.env.HOME}/.near/validator_key.json`,
      walletUrl: process.env.NEAR_WALLET_URL || 'http://localhost:4000/wallet',
    }
  case 'test':
  case 'ci':
    return {
      networkId: 'shared-test',
      nodeUrl: 'https://rpc.ci-testnet.near.org',
      masterAccount: 'test.near',
    }
  case 'ci-betanet':
    return {
      networkId: 'shared-test-staging',
      nodeUrl: 'https://rpc.ci-betanet.near.org',
      masterAccount: 'test.near',
    }
  default:
    throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`)
  }
}

module.exports = getConfig
