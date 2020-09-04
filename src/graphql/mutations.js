import { gql } from '@apollo/client';

export const REGISTER_MUTATION = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      user {
        id
        username
        email
      }
      errors {
        path
        message
      }
    }
  }
`;
