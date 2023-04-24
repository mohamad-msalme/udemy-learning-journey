import React from "react";
import { AuthForm } from '.';
import { SignupQuery, authStateQuery } from '../queries';
import { graphql } from 'react-apollo';
import { hashHistory} from 'react-router';

class SignupForm extends React.Component {
  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    }
  }
  /**
   * 
   * @param {*} nextProps 
   */
   componentWillUpdate(nextProps) {
    if (this.props.data.user && nextProps.data.user) {
      // redirect to dashboard
      hashHistory.push('/dashboard');
    }
  }
  /**
   * 
   * @param {*} param0 
   */
  onSubmit({email, password}) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ authStateQuery }]
    }).catch((res) => this.setState({errors: res.graphQLErrors.map((error) => error.message)}))
  }
  /**
   * 
   * @returns 
   */
  render() {
    return (
      <div>
        <h5>Sign up</h5>
        <AuthForm 
          errors={this.state.errors} 
          onSubmit={this.props.mutate}
        />
      </div>
    )
  }
}

export default graphql(authStateQuery)( graphql(SignupQuery)(SignupForm));