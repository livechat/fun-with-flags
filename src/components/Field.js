import React from 'react';

const Field = ({type, id, onChange, value, children}) => {

  return (
    <div>
      <label for="id">{children}</label>
      <input type={type} value={value} onChange={onChange} id={id}></input>
    </div>
  )
};

export default Field;
