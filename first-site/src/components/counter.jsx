import React, { useState } from 'react';


const Counter = () => {
  const [ counter, setCounter ] = useState(0);

  const handleClick = value => {
    setCounter(counter + value);
  };

  return (
    <div>
      <button onClick={() => handleClick(-1)}>left</button>
      <div>{counter}</div>
      <button onClick={() => handleClick(1)}>right</button>
    </div>
  );
};

export default Counter;
