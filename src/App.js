import React, { Component } from "react"; 
//import logo from "./logo.svg";
//import PropTypes from "prop-types"; 
// import "./App.css"; 

import PostForm from "./posts/PostForm.js";
import PostList from "./posts/PostList.js";




class App extends Component{ 

 constructor(props){    
super(props);   

this.state = {
fraza:"",
posts: [
{ title: 'pierwszy', timestamp: 1},        
{ title: 'drugi', timestamp: 2},        
{ title: 'trzeci', timestamp: 3},        
{ title: 'czwarty', timestamp: 4},        
{ title: 'piąty', timestamp: 5},        
{ title: 'szósty', timestamp: 6},        
{ title: 'siódmy', timestamp: 7},],    
}; 
   
 
} 

addPost = post => {   
	this.setState({
		posts:  [...this.state.posts, {...post,timestamp:new Date().getTime()}],

	});
 

}


usun = timestamp => {
	this.setState({
	posts: this.state.posts.filter(p=> p.timestamp!=timestamp),
});
}


Szukaj = (e) =>{
e.preventDefault();
this.setState({
fraza: e.target.value,
});

}



render() { 
const postsToRender = this.state.posts.filter(p=> p.title.includes(this.state.fraza)); 
return (      
<div className="App">        
<PostForm onSubmit={this.addPost} />
<form>
<label>Wyszukiwanie</label>
<input onChange={this.Szukaj} value={this.state.fraza}/>


</form>
<PostList Usun={this.usun} posts={postsToRender}/>
</div>    
);  
} } 




export default App;
