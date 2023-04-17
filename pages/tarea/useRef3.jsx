import React, { useRef } from 'react';

function Counter() {
  const counterRef = useRef(0);

  const handleClick = () => {
    counterRef.current += 1;
    console.log(`Counter: ${counterRef.current}`);
  };

  return <button onClick={handleClick}>Click me</button>;
}
