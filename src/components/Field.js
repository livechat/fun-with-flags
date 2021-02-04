import React from 'react';

const Field = ({type, id, onChange, value, label, onBlur, onFocus}) => {

  return (
    <div className="field">
      <label for="id" className="label">{label}</label>
      <input type={type} value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus} id={id} className="input"></input>
    </div>
  )
};

export default Field;
