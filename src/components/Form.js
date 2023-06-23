import React, { useState } from 'react'

function Form() {
 const [formData,setFormData] =  useState({
    username:''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formData)
  }
  return (
    <div onSubmit={handleSubmit}>
      <label>username:</label>
      <input type='text' name='username' value={formData.name} onChange={handleChange}></input>
    </div>
  )
}

export default Form
