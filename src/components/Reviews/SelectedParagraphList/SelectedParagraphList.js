import React, { useEffect, useState, useContext } from "react";
import {AllRadioOutputContext} from "../../../contexts/AllRadioOutputContext/AllRadioOutputContext";


const SelectedParagraphList = () => {
  const radioContext = useContext(AllRadioOutputContext);
  const {radioDispatch,currentSentence,radioOutputState} = radioContext;
  return (
    <div className="reviewWrapper">
     <ul>
      { radioOutputState.sentenceSelectedArray.map((data)=>{
        if(data.currentField !== '' && data.currentField !== undefined) {
        return <li>{data.currentField+'  :'}  {data.currentSentence}</li>
        }
      })}
     </ul>
    </div>

  );
};

export default SelectedParagraphList;
