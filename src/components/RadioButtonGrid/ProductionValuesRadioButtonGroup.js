import React, { useState,useContext } from 'react';
import RadioGroup from './RadioGroup'
import {AllRadioOutputContext} from '../../contexts/AllRadioOutputContext/AllRadioOutputContext'


const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'Production Values', value: 'production_values'},
  { label: 'No Production Values', value: 'no_production_values' }
];

export default function ProductionValuesRadioButtonGroup() {
  const [value, setValue] = useState('not_applicable');
  const radioContext = useContext(AllRadioOutputContext);


  const onChange = e => {
    setValue(e.target.value);
    if(e.target.value === 'production_values') {
      radioContext.radioDispatch({ type: 'productionValues'})
    } else if(e.target.value === 'no_production_values') {
      radioContext.radioDispatch({ type: 'noProductionValues'})
    } else if(e.target.value === 'not_applicable') {
      radioContext.radioDispatch({ type: 'not_applicable_productionValues'})
    }
  };

  return (
    <RadioGroup
      value={value}
      options={options}
      name="productionvalues"
      
      onChange={onChange}
    />
  );
}
