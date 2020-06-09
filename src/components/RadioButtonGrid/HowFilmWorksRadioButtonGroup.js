import React, { useState,useContext } from 'react';
import RadioGroup from './RadioGroup'
import {AllRadioOutputContext} from '../../contexts/AllRadioOutputContext/AllRadioOutputContext'


const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'How Film Works', value: 'how_film_works'},
  { label: 'How Film Doesn\'t Work', value: 'how_film_doesnt_work' }
];

export default function HowFilmWorksRadioButtonGroup() {
  const [value, setValue] = useState('not_applicable');
  const radioContext = useContext(AllRadioOutputContext);


  const onChange = e => {
    setValue(e.target.value);
    if(e.target.value === 'how_film_works') {
      radioContext.radioDispatch({ type: 'howFilmWorks'})
    } else if(e.target.value === 'how_film_doesnt_work') {
      radioContext.radioDispatch({ type: 'howFilmDoesntWork'})
    }else if(e.target.value === 'not_applicable') {
      radioContext.radioDispatch({ type: 'not_applicable_howFilmWorks'})
    }
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