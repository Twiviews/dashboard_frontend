import React, { useState,useContext,useEffect } from 'react';
import RadioGroup from './RadioGroup'
import {AllRadioOutputContext} from '../../contexts/AllRadioOutputContext/AllRadioOutputContext'


const options = [
  { label: 'N/A', value: 'not_applicable' },
  { label: 'How Film Works', value: 'how_film_works'},
  { label: 'How Film Doesn\'t Work', value: 'how_film_doesnt_work' }
];

export default function HowFilmWorksRadioButtonGroup(review) {
  const [value, setValue] = useState('not_applicable');
  const radioContext = useContext(AllRadioOutputContext);
  const {switchToggleValue} = radioContext;



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

  
  useEffect(() => {
    if(switchToggleValue) {
         console.log(review);
         if(review.review.how_film_works === true) {
          radioContext.radioDispatch({ type: 'howFilmWorks'})
          setValue('how_film_works');
        } else if(review.review.how_film_doesnt_work === true) {
          radioContext.radioDispatch({ type: 'howFilmDoesntWork'})
          setValue('how_film_doesnt_work');
        } else {
          radioContext.radioDispatch({ type: 'not_applicable_howFilmWorks'});
          setValue('not_applicable');
        } 
    }
    return () => {
    }
  }, [switchToggleValue])

  return (
    (switchToggleValue === false)  ? <RadioGroup value={value} options={options} name="howfilmworks" onChange={onChange}/> 
    : (switchToggleValue === true)  &&  <RadioGroup value={value} options={options} name="howfilmworks" disabled/> 
  );
}