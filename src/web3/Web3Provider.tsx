import React from 'react'
import { Web3Provider as Web3ProviderFactory } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'

function getLibrary(provider: any) {
  return new Web3ProviderFactory(provider)
}

export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
)
