import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";


class Layout extends React.Component{    
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
                    <li><p className="navbar-text navbar-right" >Counter:</p></li>
                    <li><p className="navbar-text navbar-right" >{this.props.counter}</p></li>                    

                </ul>
            </div>
        </nav>
                <div className="container">
                    {React.Children.map(this.props.children, (c) => React.cloneElement(c,{injectedProp: this.zmienlicznik}))}
                
                </div>
        </div>
    );
}


}


const mapStateToProps = (state) => {
	return{
		counter: state.counter,	};
};


export default connect(mapStateToProps)(Layout);