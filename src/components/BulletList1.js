import React from 'react';

const BulletList1 = ({bullets, condition}) => {

return (
  <div>
      {/* <ul>
        <li key="lower" className={`bullet--${!isPassOneLowerCase ? "disabled" : ""}`}>One lowercase character</li>
        <li key="upper" className={`bullet--${!isPassOneUpperCase ? "disabled" : ""}`}>One uppercase character</li>
        <li key="length" className={`bullet--${!isPassLongEnough ? "disabled" : ""}`}>Min. 8 characters</li>
        <li key="num" className={`bullet--${!isPassOneNum ? "disabled" : ""}`}>One number</li>
        <li key="special" className={`bullet--${!isPassSpecialChar ? "disabled" : ""}`}>One special character</li>
      </ul> */}

      <ul>
        {bullets.map((bullet, index) => {
         return <li key={index} className={`bullet--${!condition ? "disabled" : ""}`}>{bullet}</li>
        })}
      </ul>
  </div>

  )};
  //problem: jak tu przekazywac stan
  
export default BulletList1;
