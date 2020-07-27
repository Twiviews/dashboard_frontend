import React, { useState,useContext,useEffect } from 'react';
import RadioGroup from './RadioGroup'
import {AllRadioOutputContext} from '../../contexts/AllRadioOutputContext/AllRadioOutputContext'


const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'Production Values', value: 'production_values'},
  { label: 'No Production Values', value: 'no_production_values' }
];

export default function ProductionValuesRadioButtonGroup(review) {
  const [value, setValue] = useState('not_applicable');
  const radioContext = useContext(AllRadioOutputContext);
  const {switchToggleValue} = radioContext;



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

  
  useEffect(() => {
    if(switchToggleValue) {
         console.log(review);
         if(review.review.production_values === true) {
          radioContext.radioDispatch({ type: 'productionValues'});
          setValue('production_values');
        } else if(review.review.no_production_values === true) {
          radioContext.radioDispatch({ type: 'noProductionValues'});
          setValue('no_production_values');
        } else {
          radioContext.radioDispatch({ type: 'not_applicable_productionValues'});
          setValue('not_applicable');
        } 
    }
    return () => {
    }
  }, [switchToggleValue])

  return (
    (switchToggleValue === false)  ? <RadioGroup value={value} options={options} name="productionvalues" onChange={onChange}/> 
    : (switchToggleValue === true)  &&  <RadioGroup value={value} options={options} name="productionvalues" disabled/> 
  );
}
