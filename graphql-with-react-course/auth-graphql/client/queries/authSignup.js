import gql from 'graphql-tag';

export default gql`
  mutation Signup($email: String, $password) {
    signup(email: $email, password: $password){
      id,
      email
    }
  }
`;
