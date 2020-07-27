import React, {useContext,useEffect} from "react";
import Header from "../Header";
import UnLabeledReviewsWrapper from "../Reviews/UnLabeledReviewsWrapper";
import LabeledReviewsWrapper from "../LabeledReviewsWrapper/LabeledReviewsWrapper";
import OnlineUsersWrapper from "../OnlineUsers/OnlineUsersWrapper";
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import AllRadioOutput, { AllRadioOutputContext } from '../../contexts/AllRadioOutputContext/AllRadioOutputContext'
import '../../styles/App.css';


const ReviewLabelingParent = () => {
  const radioContext = useContext(AllRadioOutputContext);
  useEffect(()=>{
    console.log(radioContext.switchToggleValue);
  },[radioContext.switchToggleValue])
  return (
    <div>
    <Header/>
      <div className="parent_toggle__div">  
          <h2>Labeled Reviews</h2>
            <label class="switch">
              <input type="checkbox" onChange={()=>radioContext.radioDispatch({type:'switchToggleView',value:!radioContext.switchToggleValue})}/>
              <span class="slider"></span>
            </label>
      </div>
      <div className="row container-fluid p-left-right-0 m-left-right-0">
        <div className="row col-md-9 p-left-right-0 m-left-right-0">
            { !radioContext.switchToggleValue && <UnLabeledReviewsWrapper/> }     
            { radioContext.switchToggleValue && <LabeledReviewsWrapper/> }     
        </div>
        <div className="col-md-3 p-left-right-0">
            <OnlineUsersWrapper />
        </div>
      </div>
    </div>
  );    
};

export default ReviewLabelingParent;
