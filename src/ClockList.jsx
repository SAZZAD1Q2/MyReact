import React from 'react'
import Clock from './Clock'

const ClockList = ({quantities}) => {
  return (
    <div>
        
        <h1>Hi</h1>
      {quantities.map((key)=>(<Clock key={key}/>))}
    </div>
  )
}

export default ClockList
