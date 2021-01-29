import React from 'react';

const Field = ({type, id, onChange, value}) => {

  return (
    <div>
      <input type={type} value={value} onChange={onChange} id={id}/>
    </div>
  )
};

export default Field;
