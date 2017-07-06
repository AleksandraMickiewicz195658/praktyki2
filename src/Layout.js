import React from "react";
import {Link} from "react-router";


class Layout extends React.Component{
    
    constructor(props){
            super(props);

    this.state = {
        licznik:0

    };
    
    
}

zmienlicznik = (liczba) =>{
this.setState(
    this.state = {
        licznik: liczba
    }

);
}

render(){
    return(
        <div>
        <nav className="navbar navbar-default">

             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><p className="navbar-text" >Licznik:</p></li>
                    <li><p className="navbar-text" >{this.state.licznik}</p></li>
                    
                    <li className=""><Link to="/">home</Link></li>
                    <li className=""><Link to="/posts">Post List</Link></li>
                    <li className=""><Link to="/posts-details">Post Details</Link></li>

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

export default Layout;