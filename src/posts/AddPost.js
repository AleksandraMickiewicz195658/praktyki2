import React from "react";
import PostForm from "./PostForm";
import {connect} from "react-redux";

class AddPost extends React.Component{
	
    addPost = post => {   
		this.props.dispatch({type: "ADDPOSTS" , post:{title:post.title,timestamp:new Date().getTime()}});

	}

	render(){
	return(		
		<PostForm onSubmit={this.addPost} />	

	);
	}


}

const mapStateToProps = (state) => {
	return state;
};


export default connect(mapStateToProps)(AddPost);