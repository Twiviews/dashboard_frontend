import React, { useState,useContext,useEffect } from 'react';
import RadioGroup from './RadioGroup'
import {AllRadioOutputContext} from '../../contexts/AllRadioOutputContext/AllRadioOutputContext'



const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'Enjoyability', value: 'enjoyability'},
  { label: 'No Enjoyability', value: 'no_enjoyability' }
];


export default function EnjoyabilityRadioButtonGroup(review) {
  const [value, setValue] = useState('not_applicable');
  const radioContext = useContext(AllRadioOutputContext);
  const {switchToggleValue} = radioContext;



  const onChange = e => {
    setValue(e.target.value);
    if(e.target.value === 'enjoyability') {
      radioContext.radioDispatch({ type: 'enjoyability'})
      setValue('enjoyability');
    } else if(e.target.value === 'no_enjoyability') {
      radioContext.radioDispatch({ type: 'noEnjoyability'});
      setValue('no_enjoyability');
    } else if(e.target.value === 'not_applicable') {
      radioContext.radioDispatch({ type: 'not_applicable_noEnjoyability'});
      setValue('not_applicable');
    }
  };

  
  useEffect(() => {
    if(switchToggleValue) {
         console.log(review);
         if(review.review.enjoyability === true) {
          radioContext.radioDispatch({ type: 'enjoyability'})
        } else if(review.review.no_enjoyability === true) {
          radioContext.radioDispatch({ type: 'noEnjoyability'})
        } else {
          radioContext.radioDispatch({ type: 'not_applicable_noEnjoyability'})
        } 
    }
    return () => {
    }
  }, [switchToggleValue])

  return (
    (switchToggleValue === false)  ? <RadioGroup value={value} options={options} name="enjoyability" onChange={onChange}/> 
    : (switchToggleValue === true)  &&  <RadioGroup value={value} options={options} name="enjoyability" disabled/> 
  );
}