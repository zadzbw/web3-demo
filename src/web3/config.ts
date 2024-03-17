import { http, createConfig } from 'wagmi'
import { mainnet, bsc } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, bsc],
  transports: {
    [mainnet.id]: http(),
    [bsc.id]: http(),
  },
})
