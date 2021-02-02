import React from 'react';

const BulletList = ({isPassOneLowerCase, isPassOneUpperCase, isPassLongEnough, isPassOneNum, isPassSpecialChar}) => {

return (
  <div>
      <ul>
        <li key="lower" className={`bullet--${!isPassOneLowerCase ? "disabled" : ""}`}>One lowercase character</li>
        <li key="upper" className={`bullet--${!isPassOneUpperCase ? "disabled" : ""}`}>One uppercase character</li>
        <li key="length" className={`bullet--${!isPassLongEnough ? "disabled" : ""}`}>Min. 8 characters</li>
        <li key="num" className={`bullet--${!isPassOneNum ? "disabled" : ""}`}>One number</li>
        <li key="special" className={`bullet--${!isPassSpecialChar ? "disabled" : ""}`}>One special character</li>
      </ul>
  </div>

  )};
  
export default BulletList;
