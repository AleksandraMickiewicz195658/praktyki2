import React from "react";
import {connect} from "react-redux";

class PostDetails extends React.Component{



        PostsStatus = (id) =>{
        if(id===""){
                return "Wybierz posta z listy"
        }else{
                let post = this.props.posts.postCollections.find(p=> p.timestamp === id);
                if(post!==null){
                        return(
                                <div>
                                Wybrany Post:
                                <div>tytuł posta: {post.title}</div>
                                <div>timestamp: {post.timestamp}</div>
                                </div>
                        );
                }
                else return "Blad";
        }
}

render(){
	return (
        <div>
        {this.PostsStatus(this.props.posts.postsToShow)}</div>
        );
} 


}



const mapStateToProps = (state) => {
	return ({
                posts: state.posts,
        });
};




export default connect(mapStateToProps)(PostDetails);
