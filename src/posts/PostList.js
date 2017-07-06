import React, { Component } from "react";
import Post from "./Post";


class PostList extends Component{
	render(){
	return(
	<div className={this.props.className}>       
		{this.props.posts.map((d, index) => 
		<Post Usun={this.props.Usun} key={d.timestamp} title={d.title } 
		timestamp={d.timestamp}/>)}         
	</div> 
	);
	}


}

export default PostList;
