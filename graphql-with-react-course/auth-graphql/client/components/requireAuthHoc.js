import React from "react";
import { authStateQuery } from '../queries';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
export default (WrappedComponent) => {
  class RequireAuthHoc extends React.Component {
    componentWillUpdate(nextProps) {
      const { loading, user } = nextProps.data
      if (!loading && !user) hashHistory.push('/login');
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  return graphql(authStateQuery)(RequireAuthHoc);
}
