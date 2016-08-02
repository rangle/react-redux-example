import React from 'react';
import { connect } from 'react-redux';

import { loginUser, logoutUser } from '../actions/session';

import { Link } from 'react-router';
import Button from '../components/button';
import Content from '../components/content';
import LoginModal from '../components/login/login-modal';
import Logo from '../components/logo';
import Navigator from '../components/navigator';
import NavigatorItem from '../components/navigator-item';

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

function App({ children, session, login, logout }) {
  const token = session.get('token', false);
  const isLoggedIn = token && token !== null && typeof token !== 'undefined';
  const firstName = session.getIn(['user', 'first'], '');
  const lastName = session.getIn(['user', 'last'], '');

  return (
    <div>
      <LoginModal
        onSubmit={ login }
        isPending={ session.get('isLoading', false) }
        hasError={ session.get('hasError', false) }
        isVisible={ !isLoggedIn } />
      <Navigator testid="navigator">
        <NavigatorItem mr>
          <Logo />
        </NavigatorItem>
        <NavigatorItem isVisible={ isLoggedIn } mr>
          <Link to="/">Counter</Link>
        </NavigatorItem>
        <NavigatorItem isVisible={ isLoggedIn }>
          <Link to="/about">About Us</Link>
        </NavigatorItem>
        <div className="flex flex-auto" />
        <NavigatorItem isVisible={ isLoggedIn } mr>
          <div data-testid="user-profile" className="h3">{ `${ firstName } ${ lastName }` }</div>
        </NavigatorItem>
        <NavigatorItem isVisible={ isLoggedIn }>
          <Button onClick={ logout } className="bg-red white">
            Logout
          </Button>
        </NavigatorItem>
      </Navigator>
      <Content isVisible={ isLoggedIn }>
        { children }
      </Content>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
  session: React.PropTypes.object,
  login: React.PropTypes.func,
  logout: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
