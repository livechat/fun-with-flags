import React from 'react';

const BulletList = ({ lowerCaseValidator, upperCaseValidator, requredCharacterValidator, numberValidator, specialCharacterValidator }) => {

  const list_part1 = [{
    label: 'One lowercase character',
    className: `bullet--${!lowerCaseValidator ? "black" : "gray"}`
  },
  {
    label: 'One upper character',
    className: `bullet--${!upperCaseValidator ? "black" : "gray"}`
  },
  {
    label: 'Min. 8 characters',
    className: `bullet--${!requredCharacterValidator ? "black" : "gray"}`
  },
  ]

  const list_part2 = [
    {
      label: 'One number',
      className: `bullet--${!numberValidator ? "black" : "gray"}`
    },
    {
      label: 'One special character',
      className: `bullet--${!specialCharacterValidator ? "black" : "gray"}`
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
  )
};

export default BulletList;