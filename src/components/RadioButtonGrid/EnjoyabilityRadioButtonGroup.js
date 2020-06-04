import React, { useState } from 'react';
import RadioGroup from './RadioGroup'


const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'Enjoyability', value: 'enjoyability'},
  { label: 'No Enjoyability', value: 'no_enjoyability' }
];

export default function EnjoyabilityRadioButtonGroup() {
  const [value, setValue] = useState('not_applicable');

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <RadioGroup
      value={value}
      options={options}
      name="enjoyability"
      
      onChange={onChange}
    />
  );
}