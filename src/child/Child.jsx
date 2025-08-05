import React from 'react';

export default function Child({ onOperate, result }) {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={() => onOperate('+')}>+</button>
      <button onClick={() => onOperate('-')}>-</button>
      <button onClick={() => onOperate('*')}>*</button>
      <p>Result: {result}</p>
    </div>
  );
}
