import React from "react"; 

import Button from "../user-inferface/Button";
import styled from 'styled-components';
class PostForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: "domsylne",
		}
	}

	updateName = e =>{
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
		
		<form><div className="panel panel-default" >
			<div className="row" style={{padding:'5px'}}>
				<div className="col-md-4">
					<label>Tytul posta</label><br/>
					<input 
						className="form-control" 
						style={{width:'200px'}} 
						onChange={this.updateName} 
						value={this.state.title} />
				</div>
				
				<div  >
				<Button className="btn btn-success" label="Dodaj" onClick={this.onSubmit}/>
				</div>
			</div></div>
		</form>
		

	);
	}
}



export default PostForm;
