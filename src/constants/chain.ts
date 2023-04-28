import { Chain } from 'wagmi'

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const BNB_NAME = 'Binance Coin'

export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  nativeCurrency: {
    name: BNB_NAME,
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ['https://bsc-dataseed.binance.org'],
    },
    default: {
      http: ['https://bsc-dataseed.binance.org'],
    },
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 15921452,
    },
  },
}

const bscTest: Chain = {
  id: 97,
  name: 'BSC Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    name: BNB_NAME,
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://data-seed-prebsc-1-s2.binance.org:8545'],
    },
    public: {
      http: ['https://data-seed-prebsc-1-s2.binance.org:8545'],
    },
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 17422483,
    },
  },
  testnet: true,
}

export const CHAINS = [bsc, bscTest]
