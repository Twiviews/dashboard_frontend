import React from "react";

import Header from "./Header";
import UnLabeledReviewsWrapper from "./ToLabel/UnLabeledReviewsWrapper";
import OnlineUsersWrapper from "./OnlineUsers/OnlineUsersWrapper";

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { useAuth0 } from "./Auth/react-auth0-spa";


const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://ec2-35-153-66-98.compute-1.amazonaws.com/v1/graphql',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }),
    cache: new InMemoryCache(),
  });
 };

const App = ({ idToken }) => {
  const { loading, logout } = useAuth0();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  const client = createApolloClient(idToken);
  return (
    <ApolloProvider client={client}>
      <div>
      <Header logoutHandler={logout} />
      <div className="row container-fluid p-left-right-0 m-left-right-0">
        <div className="row col-md-9 p-left-right-0 m-left-right-0">
          
            <UnLabeledReviewsWrapper />
          
        </div>
        
        <div className="col-md-3 p-left-right-0">
          
            <OnlineUsersWrapper />
          </div>
        </div>
      </div>
    
    </ApolloProvider>  
  );    
};

export default App;
