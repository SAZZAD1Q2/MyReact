import React from 'react'

const Header = () => {
  const handleClick = () => {
    console.log('Hi sazzad')

  }
  const handleClick2 = (name) => {
    console.log( `The name of my elder son is ${name}`)
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerHTML)
  }
  return (
    <header className='header'>
      <h1>Grocery Lists</h1>
      <button onClick={handleClick}>click sazzad</button>
      <button onClick={() => handleClick2("saif")}>click sazzad2</button>
      <button onClick={(e) => handleClick3(e)}>click sazzad3 as terget</button>
    </header>
  )
}

export default Header