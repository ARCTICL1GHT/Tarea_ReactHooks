import React, { useState } from 'react';

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <div>
      <button onClick={handleToggle}>{isToggled ? 'ON' : 'OFF'}</button>
      {isToggled && <p>Toggle me on/off</p>}
    </div>
  );
}
