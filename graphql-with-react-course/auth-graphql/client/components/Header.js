import React from "react";
import { authStateQuery, logoutQuery } from '../queries';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
class Header extends React.Component {

  /**
   * 
   */
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ authStateQuery }],
    })
  }
  /**
   * 
   * @returns 
   */
  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) return <div />;

    if (user) {
      return (
        <li>
          <a onClick={this.onLogoutClick}>Logout</a>
        </li>
      ) 
    } else {
      return (
        <div>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li> 
        </div>
      )
    }

  }
  /**
   * 
   * @returns 
   */
  render() {
    return (
      <nav className="">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">Home</Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    )
  }
}

export default graphql(authStateQuery)(
  graphql(logoutQuery)(Header)
);