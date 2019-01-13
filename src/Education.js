import React from 'react';

const Education = ({university, handleChange}) => {
  return (
    <div>
      <h2>Education</h2>
      <label>Name</label>
      <input type='text' name='university' value={university} placeholder='Name' onChange={handleChange('university')}/>
    </div>
  )
}

export default Education