import React from 'react'

const Content = () => {
        const handleChange = ()=>{
     const name = ["Saif","Sazzad","Yahyaa"]
     const int = Math.floor(Math.random() * 3)
     return name[int]
     }
     const handleClick = () => {
      console.log("please click me")
     }
     const handleClick2 = (name) => {
      console.log(`${name} was Clicked`)
     }
     const handleClick3 = (e) => {
      console.log(e.target.innerHTML)
     }
   
  return (
   <div className='content'>
     <h1>My name is {handleChange()}</h1>
     <button onClick={handleClick}>Click first</button>
     <button onClick={ () => handleClick2('Sazzad')}>Name Click</button>
     <button onClick={ (e) => handleClick3(e)}>Click me </button>
     </div>
  )
}

export default Content