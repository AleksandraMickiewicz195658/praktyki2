import React from "react";
import Button from "./Button";

class ButtonAlert extends React.Component{
    showAletr = () =>{
        alert("ssa");
    
    }
    render(){
        return (<Button onClick={this.props.onClick} label={this.props.label}/>

        );
    }
}


export default ButtonAlert;
