import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className={'header mb-2'}>Hello World!</h1>
      <button
        className={'m-2 p-2 border rounded text-red-500 font-bold'}
        onClick={() => setCount((v) => v + 1)}
      >
        count is {count}
      </button>
    </>
  )
}

export default App
