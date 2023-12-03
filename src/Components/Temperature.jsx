import React from 'react'
const scaleName = {
  c : 'celsius',
  f : 'fehrenheit',
}

export default function TemperatureInput({temperature, scale, onTemperatureChange}) {
  
  return (
    <div>
      <fieldset>
            <legend>Enter temperature {scaleName[scale]} </legend>
            <input type='text' value={temperature} onChange={(e) => onTemperatureChange(e, scale)}/>
      </fieldset>
    </div>
  )
}