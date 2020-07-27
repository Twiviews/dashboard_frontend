import gql from 'graphql-tag';

export const GET_ONLINE_USERS = gql`
      subscription getOnlineUsers {
        online_users(order_by: { user : { username: asc } }) {
          id
          user {
            username
          }
        }
      }
    `;



