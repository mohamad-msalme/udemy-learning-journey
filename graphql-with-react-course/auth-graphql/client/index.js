import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css'
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory } from 'react-router';
import { App, LoginForm, SignupForm, Dashboard, RequireAuthHoc } from './components';
const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credential: 'same-origin'
  }
})
export const Root = () => {
  const client = new ApolloClient({
    dataIdFromObject: o => o.id,
    networkInterface
  });
  return (
    <ApolloProvider client={client}>
      <Router hashHistory={hashHistory}>
        <Route path="/" component={App} >
          <Route path="login" component={LoginForm} />
          <Route path="signup" component={SignupForm} />
          <Route path="dashboard" component={RequireAuthHoc(Dashboard)} />
        </Route>
      </Router>
    </ApolloProvider>
  )
}
ReactDOM.render(<Root />, document.querySelector('#root'));
