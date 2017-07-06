import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";


class Layout extends React.Component{    
    singOut = ()=> {
        this.props.dispatch({type: "SING_OUT"});


    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className=""><Link to="/">Home</Link></li>
                            <li className=""><Link to="/posts">Post List</Link></li>
                            <li className=""><Link to="/posts-details">Post Details</Link></li>
                            <li className=""><Link to="/add-post">Add new post</Link></li>
                            <li className=""><Link to="/login">Sing In</Link></li>
                            <li><p className="navbar-text navbar-right" > {PostSTatus(this.props.posts.postCounter)} {UserSTatus(this.props.user.mail)} </p></li>
                        </ul>
                         <form className="navbar-form navbar-left">

                        <button onClick={this.singOut} className="btn btn-default">Wyloguj</button>
                        </form>
                        
                        </div>
                </nav>
                <div className="container">
                    {React.Children.map(this.props.children, (c) => React.cloneElement(c,{injectedProp: this.zmienlicznik}))}
                </div>
            </div>
        );
    }
}

const PostSTatus = (postCount) =>{
    if(postCount > 0 ){
        return `counter ${postCount}`
    }
    else return "nie ma postow"

}

const UserSTatus = (user) =>{
    if(user ==="" ){
        return "Nie jesteś zalogowany";
    }
    else return `Witaj ${user}`;

}



const mapStateToProps = (state) => {
	return{
		posts:state.posts,
        user:state.session	};
};


export default connect(mapStateToProps)(Layout);