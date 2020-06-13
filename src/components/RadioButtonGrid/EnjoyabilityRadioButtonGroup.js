import React, { useState,useContext } from 'react';
import RadioGroup from './RadioGroup'
import {AllRadioOutputContext} from '../../contexts/AllRadioOutputContext/AllRadioOutputContext'



const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'Enjoyability', value: 'enjoyability'},
  { label: 'No Enjoyability', value: 'no_enjoyability' }
];


export default function EnjoyabilityRadioButtonGroup() {
  const [value, setValue] = useState('not_applicable');
  const radioContext = useContext(AllRadioOutputContext);


  const onChange = e => {
    setValue(e.target.value);
    if(e.target.value === 'enjoyability') {
      radioContext.radioDispatch({ type: 'enjoyability'})
    } else if(e.target.value === 'no_enjoyability') {
      radioContext.radioDispatch({ type: 'noEnjoyability'})
    } else if(e.target.value === 'not_applicable') {
      radioContext.radioDispatch({ type: 'not_applicable_noEnjoyability'})
    }
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