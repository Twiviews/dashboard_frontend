import React, { useContext, useState } from "react";
import LabeledReviewsList from "./LabeledReviewsList";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {AllRadioOutputContext} from '../../contexts/AllRadioOutputContext/AllRadioOutputContext';
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_USERS = gql`query MyQuery {
  users {
    username
  }
}
`;

const LabeledReviewsWrapper = () => {
  const radioContext = useContext(AllRadioOutputContext);
  
  const handleChange = (event) => {
    radioContext.radioDispatch({ type: 'changeUser',value:event.target.value})
  };
  const {loading,data} = useQuery(GET_USERS);
  if(loading) return <h2>Loading</h2>

  return (
    <div className="reviewWrapper">
      <div className="sectionHeader"></div>
      <h1>Labeled Review List</h1>
      <div className="userDropdown">
      <FormControl>
        Filter User
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={radioContext.user}
          onChange={handleChange}
        >  
        {
          data.users.map((user)=>{
          return(
          <MenuItem value={user.username}>{user.username}</MenuItem>
          )
          })
        }
        </Select>
      </FormControl>
      </div>
      <LabeledReviewsList/>
    </div>
  );
};

export default LabeledReviewsWrapper;

