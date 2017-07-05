import React, { Component } from "react"; 

class PostForm extends React.Component{
constructor(props){
super(props);
this.state = {
title: "domsylne",

}
}

updateName = e =>
{
this.setState({
title: e.target.value,
});
}

onSubmit= event =>{
	event.preventDefault();
this.props.onSubmit({
	title: this.state.title,
});
}

render(){
return(
<form>
<button onClick={this.onSubmit}>przycisk</button><br/>
<label>Label</label><br/>
<input onChange={this.updateName} value={this.state.title} /><br/>
</form>

);
}



}


export default PostForm;
