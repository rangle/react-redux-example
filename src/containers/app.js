import React from 'react';
import { connect } from 'react-redux';
import { sessionActions } from '../actions';
import { SESSION } from '../constants';
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
    request: state.request,
  };
}

function App({ children, session, login, logout, request }) {
  const token = session.get('token', false);
  const isLoggedIn = token && token !== null && typeof token !== 'undefined';
  const firstName = session.getIn(['user', 'first'], '');
  const lastName = session.getIn(['user', 'last'], '');

  return (
    <div>
      <LoginModal
        onSubmit={ login }
        isPending={ request.getIn(['waiting', SESSION.LOGIN]) || false }
        hasError={ request.getIn(['errors', SESSION.LOGIN]) ? true : false }
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
  request: React.PropTypes.object,
};

export default connect(
  mapStateToProps,
  { ...sessionActions },
)(App);
