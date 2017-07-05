import React from "react";
import {Link} from "react-router";


class Layout extends React.Component{
    
    constructor(props){
    super(props);
    this.liznik = 0;
    
}

zmienlicznik = (liczba) =>{
this.liznik=liczba;
}

render(){
    return(
        <div>
        <nav className="navbar navbar-default">

             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><p className="navbar-text" >Licznik:</p></li>
                    <li><p className="navbar-text" >{this.liznik}</p></li>
                    
                    <li className=""><Link to="/">home</Link></li>
                    <li className=""><Link to="/posts">Post List</Link></li>
                    <li className=""><Link to="/posts-details">Post Details</Link></li>

                </ul>
            </div>
        </nav>
                <div className="container">
                {this.props.children}
                </div>
        </div>
    );
}


}

export default Layout;