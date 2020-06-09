import React, { useState,useContext } from 'react';
import RadioGroup from './RadioGroup'
import {AllRadioOutputContext} from '../../contexts/AllRadioOutputContext/AllRadioOutputContext'


const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'Why Film Works', value: 'why_film_works'},
  { label: 'Why Film Doesn\'t Work', value: 'why_film_doesnt_work' }
];



export default function WhyFilmWorksRadioButtonGroup() {
  const [value, setValue] = useState('not_applicable');
  const radioContext = useContext(AllRadioOutputContext);


  const onChange = e => {
    setValue(e.target.value);
    if(e.target.value === 'why_film_works') {
      radioContext.radioDispatch({ type: 'why_film_works'})
    } else if(e.target.value === 'why_film_doesnt_work') {
      radioContext.radioDispatch({ type: 'why_film_doesnt_work'})
    }else if(e.target.value === 'not_applicable') {
      radioContext.radioDispatch({ type: 'not_applicable_why_film_works'})
    }
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