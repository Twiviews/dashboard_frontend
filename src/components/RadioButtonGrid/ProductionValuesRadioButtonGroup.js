import React, { useState } from 'react';

import Radio from '@material-ui/core/Radio';
import { default as MaterialRadioGroup } from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'Production Values', value: 'production_values'},
  { label: 'No Production Values', value: 'no_production_values' }
];

const RadioGroup = ({ value, options, name, label, onChange }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{label}</FormLabel>
    <MaterialRadioGroup
      name={name}
      value={value}
      onChange={onChange}
      disabled
    >
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          control={<Radio />}
          value={option.value}
          label={option.label}
        />
      ))}
    </MaterialRadioGroup>
  </FormControl>
);

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
