import React, { useRef } from 'react';

function Input() {
  const inputRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
