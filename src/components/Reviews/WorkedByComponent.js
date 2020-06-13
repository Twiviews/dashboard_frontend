import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Button from '@material-ui/core/Button';

const ADD_LABELER = gql`
mutation InsertLabeler($paragraph_id: Int) {
  insert_labeler(objects: {paragraph_id: $paragraph_id}) {
    returning {
      labeler_user {
        username
      }
    }
}
}
`;



const WorkedByComponent = ({classes, paragraph_id}) => {
  const [disabled, setDisabled] = useState(false); 
  const [addLabeler] = useMutation(ADD_LABELER);
  

  return (
  
    <Button
        variant="contained"
        size="medium"
        color="inherit"
        disabled = {disabled}
        onClick={e => {
          e.preventDefault();
          addLabeler({ variables: { paragraph_id: paragraph_id}});
          setDisabled(true)
        }} >      
        Label Me!
    </Button> 

  );
};

export default WorkedByComponent;
