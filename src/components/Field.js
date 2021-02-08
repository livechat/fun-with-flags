import React from 'react';

function Field({ label, type, id, value, onChange, onBlur, onFocus }) {
  return (
    <div className="field">
      <label className={label}>{label}:</label>
      <input id={id} type={type} value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus} className="input" />
    </div>
  )
}

export default Field;
