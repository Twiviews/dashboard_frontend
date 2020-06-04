import React, { useState } from 'react';
import RadioGroup from './RadioGroup'

const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'Effects on People', value: 'effects_on_people'},
  { label: 'No Effect on People', value: 'no_effect_on_people' }
];

export default function EffectsOnPeopleRadioButtonGroup() {
  const [value, setValue] = useState('not_applicable');

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <RadioGroup
      value={value}
      options={options}
      name="effectsonpeople"
      
      onChange={onChange}
    />
  );
}