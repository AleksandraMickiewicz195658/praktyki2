import React from "react";
import PostList from "./PostList.js";
//import styled from 'styled-components';
import ButtonAlert from '../user-inferface/ButtonAlert'
//import ParityList from './ParityList';
import { connect } from "react-redux";
import {withRouter} from "react-router"

class PostPage extends React.Component{
    constructor(props){    
		super(props);   
		this.state = {
			fraza:"",
			posts: this.props.posts,
		}
	} 




	usun = timestamp => {
		this.props.dispatch({type: "REMOVEPOSTS" , timestamp:timestamp});

	}


	Szukaj = (e) =>{
		e.preventDefault();
		this.setState({
		fraza: e.target.value,
		});
	}

	show = timestamp =>{
		this.props.dispatch({type: "SHOW_POST",timestamp: timestamp});
    	this.props.router.push('/posts-details');
	}

	
render(){
    	const postsToRender = this.props.posts.postCollections.filter(p=> p.title.includes(this.state.fraza)); 

	return(
		<div>
			{this.props.injectedProp}
		<ButtonAlert label="cc" onClick={this.props.injectedProp} />
			<form>
				<label>Wyszukiwanie</label>
				<input className="form-control" 
				style={{width:'800px',marginBottom:'10px'}} 
				onChange={this.Szukaj} value={this.state.fraza}/>
			</form>
			<PostList show={this.show} Usun={this.usun} posts={postsToRender}/>
			
		</div>);
	} 


}


const mapStateToProps = (state) => {
	return{
		posts: state.posts,
	};
};


export default connect(mapStateToProps)(withRouter(PostPage));
