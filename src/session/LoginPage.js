import React from "react";
import axios from "axios";
import Button from "../user-inferface/Button";
import { connect } from "react-redux";

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mail: "",
            password:"",
            message:""
        }

    }
    updateMail = (e) =>{
        this.setState({
            mail: e.target.value,
        }
        );

    }
    updatePassword = (e) =>{
        this.setState({
            password: e.target.value,
        }
        );
    }

    onSubmit = (event) =>{
		event.preventDefault();
        axios.post('http://192.168.10.127:3001/sign-in',{
            email:this.state.mail,
            password:  this.state.password
        }).then((response) =>{
            alert("Zalogowano");
            this.setState({
            message:"Zalogowano",

            });
            console.log(response);
        }).catch((error) =>{
            alert("Blad logowanie");
            this.setState({
                message:"Blad logowania",

            })
            console.log(error)})
        };       

        //this.props.dispatch({type: "SING_IN" , mail:this.state.mail});
		//this.props.router.push('/posts');
        
        errorMessage = (blad) =>{
            return blad;

        }
    



    render(){
        return (
		<form><div className="panel panel-default" >
			<div className="row" style={{padding:'5px'}}>
				<div className="col-md-4">
					<label>Mail</label><br/>
					<input 
						className="form-control" 
						style={{width:'200px'}} 
						onChange={this.updateMail} 
						value={this.state.mail}
                         />
                    <label>Password</label><br/>
					<input 
						className="form-control" 
						style={{width:'200px'}} 
						onChange={this.updatePassword} 
						value={this.state.password}
                         />
                        <div>{this.state.message}</div>
				</div>
				
				<div  >
				<Button className="btn btn-success" label="Zaloguj" onClick={this.onSubmit}/>
				</div>
			</div></div>
            
		</form>

        );
    }
}

const mapStateToProps = (state) => {
	return state;
};


export default connect(mapStateToProps)(LoginPage);
