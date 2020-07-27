import React, { useState } from "react";
import { useQuery, useMutation, useEffect, useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Button from '@material-ui/core/Button';

const ADD_LABELER = gql`
mutation InsertLabeler($paragraph_id: Int, $label_me: Boolean) {
  insert_labeler(objects: {paragraph_id: $paragraph_id, label_me: $label_me}) {
    returning {
      labeler_user {
        username
      }
    }
}
}
`;
const GET_LABELME = gql`
subscription getLabelMe($paragraph_id: Int!) {
  labeler_by_pk(paragraph_id: $paragraph_id) {
    label_me
  }
}`;


export default function WorkedByComponent({classes, paragraph_id}) {

  const [addLabeler] = useMutation(ADD_LABELER);  

  let label_me = false

  const { loading, error, data } = useSubscription(GET_LABELME, {variables: { paragraph_id: paragraph_id}});
  if (loading) return <p>Loading ...</p>;
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  if(data.labeler_by_pk !== null){
    label_me = data.labeler_by_pk.label_me; 
  }
  


  return ( 
    <Button
        variant="contained"
        size="medium"
        color="inherit"
        disabled = { label_me } 
        onClick={e => {
          e.preventDefault();
          addLabeler({ variables: { paragraph_id: paragraph_id, label_me: true}});          
        }} >      
        Label Me!
    </Button> 
  );
}


