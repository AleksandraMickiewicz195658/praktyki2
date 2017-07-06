import React from "react";
import PostForm from "./PostForm.js";
import PostList from "./PostList.js";
import styled from 'styled-components';
import ButtonAlert from '../user-inferface/ButtonAlert'
import ParityList from './ParityList';

class PostPage extends React.Component{
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
		{ title: 'siódmy', timestamp: 20},],    
	}; 
	this.props.injectedProp(this.state.posts.length);
	} 

	addPost = post => {   
		this.setState({
			posts:  [...this.state.posts, {...post,timestamp:new Date().getTime()}],

		});

		this.props.injectedProp(this.state.posts.length+1);
	}


	usun = timestamp => {
		this.setState({
		posts: this.state.posts.filter(p=> p.timestamp!==timestamp),
	});
	this.props.injectedProp(this.state.posts.length -1);
	}


	Szukaj = (e) =>{
		e.preventDefault();
		this.setState({
		fraza: e.target.value,
		});
	}
render(){
    	const postsToRender = this.state.posts.filter(p=> p.title.includes(this.state.fraza)); 

	return(
		<div>
			{this.props.injectedProp}
		<PostForm onSubmit={this.addPost} />
		<ButtonAlert label="cc" onClick={this.props.injectedProp} />
			<form>
				<label>Wyszukiwanie</label>
				<input className="form-control" 
				style={{width:'800px',marginBottom:'10px'}} 
				onChange={this.Szukaj} value={this.state.fraza}/>
			</form>
			<PostList Usun={this.usun} posts={postsToRender}/>
			
		</div>);
	} 


}

const StyledPostList = styled(PostList)`
margin-top:20px;
`;

export default PostPage;
