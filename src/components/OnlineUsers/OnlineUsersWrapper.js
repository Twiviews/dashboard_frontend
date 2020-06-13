import React, { useEffect, Fragment, useState } from "react";
import { useMutation, useSubscription } from "@apollo/react-hooks";
import {UPDATE_LASTSEEN_MUTATION} from '../graphql/updateLastSeen.graphql'


import OnlineUser from "./OnlineUser";
import { GET_ONLINE_USERS } from "../graphql/getOnlineUsers.graphql";

const OnlineUsersWrapper = () => {
  
  const [onlineIndicator, setOnlineIndicator] = useState(0);
  
  let onlineUsersList;
  
  useEffect(() => {
     // Every 30s, run a mutation to tell the backend that you're online
     updateLastSeen();
     setOnlineIndicator(setInterval(() => updateLastSeen(), 30000));
 
     return () => {
       // Clean up
       clearInterval(onlineIndicator);
     };
 }, []);



 
 const [updateLastSeenMutation] = useMutation(UPDATE_LASTSEEN_MUTATION);
  const updateLastSeen = () => {
    // Use the apollo client to run a mutation to update the last_active value
    updateLastSeenMutation({
      variables: { now: new Date().toISOString() }
    });
  };

  const { loading, error, data } = useSubscription(GET_ONLINE_USERS);

  if (loading) {
    return <span>Loading...</span>;
  }
  if (error) {
    console.error(error);
    return <span>Error!</span>;
  }
  if (data) {
    onlineUsersList = data.online_users.map(u => (
      <OnlineUser key={u.id} user={u.user} />
    ));
  }

  return (
    <div className="onlineUsersWrapper">
      <Fragment>
        <div className="sliderHeader">
          Online users - {onlineUsersList.length}
        </div>
        {onlineUsersList}
      </Fragment>

    </div>
  );
};

export default OnlineUsersWrapper;
