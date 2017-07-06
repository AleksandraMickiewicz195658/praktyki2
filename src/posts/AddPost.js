import React from "react";
import PostForm from "./PostForm";
import {connect} from "react-redux";
import { withRouter } from "react-router";

class AddPost extends React.Component{
	
    addPost = post => {   
		this.props.dispatch({type: "ADDPOSTS" , post:{title:post.title,timestamp:new Date().getTime()}});
		this.props.router.push('/posts');
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


export default connect(mapStateToProps)(withRouter(AddPost));