import React, { useState } from 'react';

import Radio from '@material-ui/core/Radio';
import { default as MaterialRadioGroup } from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'How Film Works', value: 'how_film_works'},
  { label: 'How Film Doesn\'t Work', value: 'how_film_doesnt_work' }
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

export default function HowFilmWorksRadioButtonGroup() {
  const [value, setValue] = useState('not_applicable');

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <RadioGroup
      value={value}
      options={options}
      name="howfilmworks"
      
      onChange={onChange}
    />
  );
}