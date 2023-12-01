import React from 'react'

const Content = () => {
    const handleChange = ()=>{
        const name = ["saif","sazzad","yahyaa","Rupa"]
        const int = Math.floor(Math.random() * 4)
        return name[int]
     }
  return (
    <div>
       <div>
        <h1>Hi! Saif Yahyaa Rupa</h1>
       </div>
       <h1>{handleChange()}</h1>
    </div>
  )
}

export default Content
