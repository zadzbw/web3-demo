import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import { WagmiProvider } from '@/providers/WagmiProvider'
import '@/style/index.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <WagmiProvider>
    <App />
  </WagmiProvider>,
)
