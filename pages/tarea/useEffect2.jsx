import React, { useEffect } from 'react';

function LogProps({ name, age }) {
  useEffect(() => {
    console.log(`Name: ${name}, Age: ${age}`);
  }, [name, age]);

  return null;
}
