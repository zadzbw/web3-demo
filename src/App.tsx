import React from 'react'
import { useAccount, useBalance, useConnect, useDisconnect, useNetwork } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function App() {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  const { address } = useAccount()
  const { chain } = useNetwork()
  const { data } = useBalance({
    address,
  })

  if (address) {
    return (
      <div className="m-2 mt-16 space-y-1">
        <button className="rounded-2xl border-2 px-4 py-2 font-bold" onClick={() => disconnect()}>
          Disconnect
        </button>
        <div>address: {address}</div>
        <div>chainInfo: {chain?.name}</div>
        <div>chainId: {chain?.id}</div>
        {data && (
          <div>
            balance: {data.formatted} {data.symbol}
          </div>
        )}
      </div>
    )
  }

  const handleClick = () => {
    window.aaa()
  }

  return (
    <div className="m-2 mt-16 flex flex-col space-y-1">
      <button className="rounded-2xl border-2 px-4 py-2 font-bold" onClick={() => connect()}>
        Connect Wallet
      </button>
      <button
        id="test-btn"
        className="rounded-2xl border-2 px-4 py-2 font-bold"
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  )
}
