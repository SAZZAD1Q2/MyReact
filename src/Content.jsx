import React from 'react'

const Content = () => {
        const handleChange = ()=>{
     const name = ["Saif","Sazzad","Yahyaa"]
     const int = Math.floor(Math.random() * 3)
     return name[int]

  }
  return (
     <h1>My name is {handleChange()}</h1>
  )
}

export default Content