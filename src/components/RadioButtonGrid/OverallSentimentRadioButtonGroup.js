import React, { useState } from 'react';
import RadioGroup from './RadioGroup'

const options = [
  { label: 'Neutral', value: 'neutral' },
  { label: 'Positive', value: 'positive'},
  { label: 'Negative', value: 'negative' }
];

export default function OverallSentimentRadioButtonGroup() {
  const [value, setValue] = useState('neutral');

  const onChange = e => {
    setValue(e.target.value);
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