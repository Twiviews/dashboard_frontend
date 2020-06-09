import React, { useState,useContext } from 'react';
import RadioGroup from './RadioGroup'
import {AllRadioOutputContext} from '../../contexts/AllRadioOutputContext/AllRadioOutputContext'


const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'Effects on People', value: 'effects_on_people'},
  { label: 'No Effect on People', value: 'no_effect_on_people' }
];

export default function EffectsOnPeopleRadioButtonGroup() {
  const [value, setValue] = useState('not_applicable');
  const radioContext = useContext(AllRadioOutputContext);

  const onChange = e => {
    setValue(e.target.value);
    if(e.target.value === 'effects_on_people') {
      radioContext.radioDispatch({ type: 'effectsonPeople'})
    } else if(e.target.value === 'no_effect_on_people') {
      radioContext.radioDispatch({ type: 'noEffectOnPeople'})
    } else if(e.target.value === 'not_applicable') {
      radioContext.radioDispatch({ type: 'not_applicable_noEffectOnPeople'})
    }
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