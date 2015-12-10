import React from 'react';
import { connect } from 'react-redux';

import { loginUser, logoutUser } from '../actions/session';

import { Link } from 'react-router';
import Button from '../components/ui/Button';
import Content from '../components/ui/Content';
import LoginModal from '../components/login/LoginModal';
import Logo from '../components/ui/Logo';
import Navigator from '../components/navigator/Navigator';
import NavigatorItem from '../components/navigator/NavigatorItem';

function mapStateToProps(state) {
  return {
    session: state.session,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginUser()),
    logout: () => dispatch(logoutUser()),
  };
}

const App = ({ children, session, login, logout }) => {
  const token = session.get('token', false);
  const isLoggedIn = token && token !== null && typeof token !== 'undefined';

  return (
    <div>
      <LoginModal
        onSubmit={ login }
        isPending={ session.get('isLoading', false) }
        hasError={ session.get('hasError', false) }
        isVisible={ !isLoggedIn } />
      <Navigator>
        <div className="flex flex-auto">
          <NavigatorItem className="p1">
            <Logo />
          </NavigatorItem>
          <NavigatorItem isVisible={ isLoggedIn } className="p1">
            <Link to="/">Counter</Link>
          </NavigatorItem>
          <NavigatorItem isVisible={ isLoggedIn } className="p1">
            <Link to="/about">About Us</Link>
          </NavigatorItem>
        </div>
        <div className="flex flex-end">
          <NavigatorItem isVisible={ isLoggedIn } className="p1 bold">
            { `${ session.getIn(['user', 'firstName'], '') } ${ session.getIn(['user', 'lastName'], '') } ` }
          </NavigatorItem>
          <NavigatorItem isVisible={ isLoggedIn }>
            <Button onClick={ logout } className="bg-red white">
              Logout
            </Button>
          </NavigatorItem>
        </div>
      </Navigator>
      <Content isVisible={ isLoggedIn }>
        { children }
      </Content>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
