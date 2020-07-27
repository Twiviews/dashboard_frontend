import React, {useContext,useEffect} from "react";

import Header from "./Header";
import UnLabeledReviewsWrapper from "./Reviews/UnLabeledReviewsWrapper";
import OnlineUsersWrapper from "./OnlineUsers/OnlineUsersWrapper";

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloProvider } from '@apollo/react-hooks';
import { useAuth0 } from "./Auth/react-auth0-spa";
import AllRadioOutput, { AllRadioOutputContext } from '../contexts/AllRadioOutputContext/AllRadioOutputContext'
import ReviewLabelingParent from './ReviewLabelingParent/ReviewLabelingParent';
import '../styles/App.css';

const createApolloClient = (authToken) => {
  return new ApolloClient({
    // link: new HttpLink({
    link: new WebSocketLink({ uri: 'wss://hgql4notchup.herokuapp.com/v1/graphql',
       
      // headers: {
      //   Authorization: `Bearer ${authToken}`
      // }
    options: {
        reconnect: true,
        connectionParams: {
           headers: {
             Authorization: `Bearer ${authToken}`
           }
        }
      }

    }),
    cache: new InMemoryCache(),
  });
 };

const App = ({ idToken }) => {
  const { loading, logout } = useAuth0();
  /*
  useEffect(()=>{
    console.log(switchToggleValue);
  },[switchToggleValue]) */
  if (loading) {
    return <div>Loading...</div>;
  }
  const client = createApolloClient(idToken);
  return (
    <ApolloProvider client={client}>
    <AllRadioOutput client={client}>
    <Header logoutHandler={logout} />
      <ReviewLabelingParent/>
      </AllRadioOutput>
    </ApolloProvider>  
  );    
};

export default App;
