import React from 'react';
import { Route, Router } from 'react-router-dom';
import Login from './components/Login';
import DashBoard from './components/Dashboard';
import { history } from './helpers/history';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
      const user1 = localStorage.getItem('user');
        return (
            <Router history={history}>
                <div>
                  <Route path="/index.html" component={Login} />
                    {user1 ? <Route path="/" component={DashBoard} user={user1}/> : <Route path="/" component={Login} exact={true} />}
                </div>
            </Router>
        )
    }

}


const mapStateToProps = (state) => {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
      user,
      users
  };
}

export default connect(mapStateToProps)(App);