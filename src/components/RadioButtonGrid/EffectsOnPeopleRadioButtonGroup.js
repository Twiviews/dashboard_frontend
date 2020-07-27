import React, { useState,useContext,useEffect } from 'react';
import RadioGroup from './RadioGroup'
import {AllRadioOutputContext} from '../../contexts/AllRadioOutputContext/AllRadioOutputContext'


const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'Effects on People', value: 'effects_on_people'},
  { label: 'No Effect on People', value: 'no_effect_on_people' }
];

export default function EffectsOnPeopleRadioButtonGroup(review) {
  const [value, setValue] = useState('not_applicable');
  const radioContext = useContext(AllRadioOutputContext);
  const {switchToggleValue} = radioContext;


  useEffect(() => {
    if(switchToggleValue) {
         console.log(review);
         if(review.review.effects_on_people === true) {
            radioContext.radioDispatch({ type: 'effectsonPeople'})
            setValue('effects_on_people');
          } else if(review.review.no_effect_on_people === true) {
            radioContext.radioDispatch({ type: 'noEffectOnPeople'})
            setValue('no_effect_on_people');
         } else {
            radioContext.radioDispatch({ type: 'not_applicable_noEffectOnPeople'});
            setValue('not_applicable');
         } 
    }
    return () => {
    }
  }, [switchToggleValue])

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
     (switchToggleValue === false)  ? <RadioGroup value={value} options={options} name="effectsonpeople" onChange={onChange}/> 
     : (switchToggleValue === true)  &&  <RadioGroup value={value} options={options} name="effectsonpeople" disabled/> 
    );
}