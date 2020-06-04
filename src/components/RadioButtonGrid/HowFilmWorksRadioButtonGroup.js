import React, { useState } from 'react';
import RadioGroup from './RadioGroup'

const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'How Film Works', value: 'how_film_works'},
  { label: 'How Film Doesn\'t Work', value: 'how_film_doesnt_work' }
];

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