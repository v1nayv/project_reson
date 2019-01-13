import React from 'react';

const Basics = ({handleChange, name, email, psummary}) => {
  return (
    <div>
      <h2>Basic Information</h2>
      <label>Name</label>
      <input type='text' name='name' value={name} placeholder='Name' onChange={handleChange('name')}/>
      
      <label>Email</label>
      <input type='text' name='email' value={email} placeholder='Email' onChange={handleChange('email')}/>

      <label>Professional Summary</label>
      <textarea name='psummary' value={psummary} placeholder='Professional Summary' onChange={handleChange('psummary')}/>

    </div> 
  )
}

export default Basics;