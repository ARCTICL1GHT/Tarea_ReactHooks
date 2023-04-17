import React, { useEffect, useState } from 'react';

function ShowHide() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    return () => console.log('Unmounting component...');
  }, []);

  const handleToggle = () => setShow(!show);

  return (
    <div>
      <button onClick={handleToggle}>{show ? 'Hide' : 'Show'}</button>
      {show && <p>Show/hide me</p>}
    </div>
  );
}
