import React, {Component} from 'react';
//import logo from "./logo.svg";
//import PropTypes from "prop-types";
// import "./App.css";

import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './Home';
import PostPage from './posts/PostPage';
import PostsDetails from './posts/PostsDetails';
import Layout from './Layout';
import AddPost from './posts/AddPost';
import LoginPage from './session/LoginPage';
import RegisterPage from './session/RegisterPage';

class App extends Component {
  authenticateUser = (nextState, replace) => {
    const state = this.props.store.getState();
    if (!state.session.token) {
      replace({
        pathname: 'login',
      });
    }
  };

  render() {
    return (
      <div className="App" style={{padding: '5px'}}>
        <Router history={hashHistory}>
          <Route path="/" component={Layout} onEnter={this.authenticateUser}>
            <IndexRoute component={Home} />
            <Route path="posts" component={PostPage} />
            <Route path="posts-details/:id" component={PostsDetails} />
            <Route path="add-post" component={AddPost} />
          </Route>
          <Route path="login" component={LoginPage} />
          <Route path="register" component={RegisterPage} />
        </Router>
      </div>
    );
  }
}

export default App;
