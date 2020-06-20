import React, { Component } from 'react';
import PrivateRoute from '../../components/PrivateRoute';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import LoginPage from 'containers/LoginPage';
import HomePage from 'containers/HomePage';

import Dashboard from 'containers/Dashboard';
import ItemList from 'containers/ItemList';

import NotFoundPage from 'containers/NotFoundPage';

class AppRoute extends Component {

  componentDidMount(){
console.log('Route Mounted')
  }

  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path='' exact component={HomePage} isAuthenticated={this.props.isAuthenticated} />
          <PrivateRoute exact path='/dashboard' exact component={Dashboard} isAuthenticated={this.props.isAuthenticated} />
          <PrivateRoute exact path='/item_list' component={ItemList} isAuthenticated={this.props.isAuthenticated} />
          {/* <Route path="" component={NotFoundPage} /> */}
        </Switch>
      </div>
    );
  }
}

export default AppRoute;
