import React from 'react';

const Checkbox = ({onClick}) => {

  return (
    <div className="checkbox-wraper">
      <input type="checkbox" id="consent" name="consent" className="checkbox" onClick={onClick}/>
      <label for="consent">I don't want to receive emails about new Mailchimp products, best practices, or special offers.</label>
    </div>
  )};
  
export default Checkbox;
