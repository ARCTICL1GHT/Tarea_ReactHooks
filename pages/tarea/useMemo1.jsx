import React, { useMemo, useState } from 'react';

function ExpensiveCalculation({ a, b }) {
  const result = useMemo(() => {
    console.log('Calculating result...');
    let i = 0;
    while (i < 1000000000) i++;
    return a * b;
  }, [a, b]);

  return <p>Result: {result}</p>;
}

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={a}
        onChange={e => setA(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={b}
        onChange={e => setB(parseInt(e.target.value))}
      />
      <ExpensiveCalculation a={a} b={b} />
    </div>
  );
}
