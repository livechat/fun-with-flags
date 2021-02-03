import React from 'react';

const BulletList = ({isPassOneLowerCase, isPassOneUpperCase, isPassLongEnough, isPassOneNum, isPassSpecialChar}) => {

  const list_part1 = [{
    label: 'One lowercase character',
    className: `bullet--${!isPassOneLowerCase ? "black" : "gray"}`
  },
  {
    label: 'One upper character',
    className: `bullet--${!isPassOneUpperCase ? "black" : "gray"}`
  }, 
  {
    label: 'Min. 8 characters',
    className: `bullet--${!isPassLongEnough ? "black" : "gray"}`
  }, 
]

  const list_part2 = [
    {
      label: 'One number',
      className: `bullet--${!isPassOneNum ? "black" : "gray"}`
    }, 
    {
      label: 'One special character',
      className: `bullet--${!isPassSpecialChar ? "black" : "gray"}`
    }
  ];

return (
  <div className="bullet-list">
     <ul>
      {list_part1.map((item, index) =>
        <li key={`list-${index}`} className={item.className}>{item.label}</li>
    )}
    </ul>
    <ul className="ul">
      {list_part2.map((item, index) =>
        <li key={`list-${index}`} className={item.className}>{item.label}</li>
    )}
    </ul>
  </div>
  )};

export default BulletList;
