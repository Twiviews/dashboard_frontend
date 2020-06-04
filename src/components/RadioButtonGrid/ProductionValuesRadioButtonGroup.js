import React, { useState } from 'react';
import RadioGroup from './RadioGroup'

const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'Production Values', value: 'production_values'},
  { label: 'No Production Values', value: 'no_production_values' }
];

export default function ProductionValuesRadioButtonGroup() {
  const [value, setValue] = useState('not_applicable');

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <RadioGroup
      value={value}
      options={options}
      name="productionvalues"
      
      onChange={onChange}
    />
  );
}
