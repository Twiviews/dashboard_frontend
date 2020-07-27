import React, { useState,useContext,useEffect } from 'react';
import RadioGroup from './RadioGroup'
import {AllRadioOutputContext} from '../../contexts/AllRadioOutputContext/AllRadioOutputContext'


const options = [
  { label: 'Neutral', value: 'neutral' },
  { label: 'Positive', value: 'positive'},
  { label: 'Negative', value: 'negative' }
];

export default function OverallSentimentRadioButtonGroup(review) {
  const [value, setValue] = useState('neutral');
  const radioContext = useContext(AllRadioOutputContext);
  const {switchToggleValue} = radioContext;



  const onChange = e => {
    setValue(e.target.value);
    if(e.target.value === 'neutral') {
      radioContext.radioDispatch({ type: 'sentiment',payload:'neutral'})
    } else if(e.target.value === 'positive') {
      radioContext.radioDispatch({ type: 'sentiment',payload:'positive'})
    } else if(e.target.value === 'negative') {
      radioContext.radioDispatch({ type: 'sentiment',payload:'negative'})
    }
  };

  
  useEffect(() => {
    if(switchToggleValue) {
         console.log(review);
         if(review.review.sentiment === 'positive') {
          radioContext.radioDispatch({ type: 'sentiment',payload:'positive'})
          setValue('positive');
        } else if(review.review.sentiment === 'negative') {
          radioContext.radioDispatch({ type: 'sentiment',payload:'negative'});
          setValue('negative');
        } else {
          radioContext.radioDispatch({ type: 'sentiment',payload:'neutral'})
          setValue('neutral');
        } 
    }
    return () => {
    }
  }, [switchToggleValue])

  return (
    (switchToggleValue === false)  ? <RadioGroup value={value} options={options} name="sentiment" onChange={onChange}/> 
    : (switchToggleValue === true)  &&  <RadioGroup value={value} options={options} name="sentiment" disabled/> 
  );
}