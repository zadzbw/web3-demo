import React, { useState } from 'react'
import Header from '@/components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <button
        className={'m-2 p-2 border rounded text-red-500 font-bold'}
        onClick={() => setCount((v) => v + 1)}
      >
        count is {count}
      </button>
      <button
        className={'m-2 p-2 border rounded text-red-500 font-bold'}
        onClick={() => window.aaa()}
      >
        aaa
      </button>
      <button
        className={'m-2 p-2 border rounded text-red-500 font-bold'}
        onClick={() => window.bbb()}
      >
        bbb
      </button>
    </>
  )
}

export default App
