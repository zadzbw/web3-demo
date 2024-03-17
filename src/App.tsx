import React from 'react'
import { readContract } from '@wagmi/core'
import { erc20Abi } from 'viem'
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
import { config } from '@/web3/config'

export default function App() {
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { address, chain } = useAccount()
  const { data: balance } = useBalance({
    address,
  })

  const handleClick = () => {
    readContract(config, {
      chainId: mainnet.id,
      abi: erc20Abi,
      functionName: 'symbol',
      // address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', // MKR
      address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce', // SHIB
    })
      .then((symbol) => {
        console.log({ symbol })
      })
      .catch((e: Error) => {
        console.error('~~~error', e)
      })
  }

  if (address) {
    return (
      <div className="m-2 mt-16 flex flex-col gap-y-1">
        <div className="flex gap-x-1">
          <button className="rounded-2xl border-2 px-4 py-2 font-bold" onClick={() => disconnect()}>
            Disconnect
          </button>
          <button
            id="test-btn"
            className="rounded-2xl border-2 px-4 py-2 font-bold"
            onClick={handleClick}
          >
            Query Symbol
          </button>
        </div>
        <div>address: {address}</div>
        <div>chainInfo: {chain?.name}</div>
        <div>chainId: {chain?.id}</div>
        {balance && (
          <div>
            balance: {balance.formatted} {balance.symbol}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="m-2 mt-16 flex flex-col space-y-1">
      <button
        className="rounded-2xl border-2 px-4 py-2 font-bold"
        onClick={() => connect({ connector: injected() })}
      >
        Connect Wallet
      </button>
    </div>
  )
}
