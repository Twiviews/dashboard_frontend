import React, { useState,useContext } from 'react';
import RadioGroup from './RadioGroup'
import {AllRadioOutputContext} from '../../contexts/AllRadioOutputContext/AllRadioOutputContext'


const options = [
  { label: 'Neutral', value: 'neutral' },
  { label: 'Positive', value: 'positive'},
  { label: 'Negative', value: 'negative' }
];

export default function OverallSentimentRadioButtonGroup() {
  const [value, setValue] = useState('neutral');
  const radioContext = useContext(AllRadioOutputContext);


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

  return (
    <RadioGroup
      value={value}
      options={options}
      name="sentiment"
      
      onChange={onChange}
    />
  );
}