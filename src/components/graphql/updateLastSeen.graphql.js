import gql from 'graphql-tag';

export const UPDATE_LASTSEEN_MUTATION = gql`
mutation updateLastSeen($now: timestamptz!) {
  update_users(where: {}, _set: { last_active: $now }) {
    affected_rows
  }
}
`;

