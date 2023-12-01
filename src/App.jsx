import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import Content from './Content'
import ClockList from './ClockLIst'
import NewClock from './NewClock'

function App() {
 const quantities = [1, 2, 3]

  return (
    <>
    <NewClock/>
        <Form/>
    
     <Content/>
    </>
  )
}

export default App
