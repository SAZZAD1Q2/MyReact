import React, { useState } from 'react'

const Counter = () => {
      const [counter, setcounter] = useState(0)
  return (
      <>
    <h1>{counter}</h1>
    <button onClick={() => setcounter(counter + 1)}>count</button>
    
</>
  )
}


export default Counter