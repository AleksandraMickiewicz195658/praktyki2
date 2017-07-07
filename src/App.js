import React, { Component } from "react"; 
//import logo from "./logo.svg";
//import PropTypes from "prop-types"; 
// import "./App.css"; 


import {Router, Route, IndexRoute,  hashHistory} from "react-router";
import Home from "./Home";
import PostPage from "./posts/PostPage";
import PostsDetails from "./posts/PostsDetails";
import Layout from "./Layout";
import AddPost from "./posts/AddPost";
import LoginPage from "./session/LoginPage";



class App extends Component{ 


	render() { 
		return (      
		<div className="App" style={{padding:'5px'}}> 
			<Router history={hashHistory} >
				<Route path='/' component={Layout} >
					<IndexRoute component={Home}></IndexRoute>
					<Route path="posts" component={PostPage} />					
					<Route path="posts-details" component={PostsDetails} />
					<Route path="add-post" component={AddPost} />
					<Route path="login" component={LoginPage} />					
				</Route>
			</Router>       
			
		</div>    
		);  
	} 
} 




export default App;
