import React, { Component } from "react";

class Button extends React.Component{
render(){
	return (<button style={{color:'#fff', border: "none", backgroundColor: "green"}} onClick={this.props.onClick}>{this.props.label}</button>);
}


}


export default Button;
