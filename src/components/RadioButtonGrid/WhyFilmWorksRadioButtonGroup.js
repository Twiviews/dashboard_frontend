import React, { useState } from 'react';
import RadioGroup from './RadioGroup'

const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'Why Film Works', value: 'why_film_works'},
  { label: 'Why Film Doesn\'t Work', value: 'why_film_doesnt_work' }
];



export default function WhyFilmWorksRadioButtonGroup() {
  const [value, setValue] = useState('not_applicable');

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <RadioGroup
      value={value}
      options={options}
      name="whyfilmworks"
      
      onChange={onChange}
    />
  );
}