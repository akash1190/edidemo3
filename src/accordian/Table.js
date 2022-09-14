import React from 'react'

import './Table.css';



const Table = () =>{
    const [isRedColor, setRedColor] = React.useState(false);

  const toggleColor = () => setRedColor((prev) => !prev);

  return (
    <div className='container'>
    <button
      onClick={toggleColor}
      style={{
        background: isRedColor ? "red" : "black",
        color: 'white'
      }}
    >
      Button is {isRedColor ? "red" : "not red"}
    </button>
    </div>
  );
  
}

export default Table;


