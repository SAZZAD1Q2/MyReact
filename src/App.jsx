import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleChange = ()=>{
     const name = ["saif","sazzad","yahyaa"]
     const int = Math.floor(Math.random() * 3)
     return name[int]

  }
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hi! Saif and Yahyaa</h1>
       </div>
       <h1>{handleChange()}</h1>
    </>
  )
}

export default App
