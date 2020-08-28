import React from 'react';

const BaseInput = function ({number, base, onChange}) {
  return (
    <div>
      <label>Base {base}:</label>
      <input onChange={(e) => onChange(e.target.value, base)} value={number} />
    </div>
  );
};

export default BaseInput;