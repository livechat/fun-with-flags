import React from 'react';

const Field = ({type, id, onChange, value, children}) => {

  return (
    <div className="field">
      <label for="id" className="label">{children}</label>
      <input type={type} value={value} onChange={onChange} id={id} className="input"></input>
    </div>
  )
};

export default Field;
