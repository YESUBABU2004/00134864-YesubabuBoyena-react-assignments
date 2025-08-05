import React from 'react'
import { useState } from 'react';
import Child from '../child/Child';

export default function Parent() {
const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(null);

  const Operation = (op) => {
    let res = 0;
    if (op === '+') res = Number(a) + Number(b);
    else if (op === '-') res = Number(a) - Number(b);
    else if (op === '*') res = Number(a) * Number(b);
    setResult(res);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="Enter a" />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="Enter b" />
      <Child onOperate={Operation} result={result} />
    </div>
  );
}
