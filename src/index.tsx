import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import App from '@/App'
import { config } from '@/web3/config'
import '@/style/index.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)

const queryClient = new QueryClient()

root.render(
  <WagmiProvider config={config} reconnectOnMount>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </WagmiProvider>,
)
