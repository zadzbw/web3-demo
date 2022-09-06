import React from 'react'
import { createRoot } from 'react-dom/client'
import { Web3Provider } from '@/web3/Web3Provider'
import App from '@/App'
import '@/style/index.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Web3Provider>
    <App />
  </Web3Provider>,
)
