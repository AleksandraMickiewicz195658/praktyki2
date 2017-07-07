import React from "react";
import axios from "axios";
import Button from "../user-inferface/Button";
import { connect } from "react-redux";

class RegisterPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mail: "",
            password:"",
            repeatpassword: "",
            message:""
        }

    }

    updateRepeatpassword = (e)=>{
        this.setState({
            repeatpassword: e.target.value,
        }
        );
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

    singUp = (event) =>{
            event.preventDefault();
            if(this.state.password!==this.state.repeatpassword){
                this.setState({
                    message: "rozne hasla"
                    }
                )
            }else{
                axios.post("https://praktyki-react.herokuapp.com/api/v1/registrations", {      
                    user: { email: this.state.mail, password: this.state.password }    })
                    .then((response)=>{
                        alert('Twoje konto zostalo utworzone, zaloguj sie!');
                        this.props.router.push('/login');
                        console.log(response);
                    }).catch((error)=>{
                        alert('BladLogowania');
                        console.log(error);
                    })

            }
        }
    



    render(){
        return (
		<form><div className="panel panel-default" >
			<div className="row" style={{padding:'5px'}}>
				<div className="col-md-4">
					<label>email</label><br/>
					<input 
						className="form-control" 
						style={{width:'200px'}} 
						onChange={this.updateMail} 
						value={this.state.mail}
                         />
                    <label>password</label><br/>
					<input 
                        type="password" id="pwd"
						className="form-control" 
						style={{width:'200px'}} 
						onChange={this.updatePassword} 
						value={this.state.password}
                         />
                    <label>repeat password</label><br/>
					<input 
                        type="password" id="pwd"
						className="form-control" 
						style={{width:'200px'}} 
						onChange={this.updateRepeatpassword} 
						value={this.state.repeatpassword}
                         />
                        <div>{this.state.message}</div>
				</div>
				
				<div  >
				<Button className="btn btn-success" label="Sing Up" onClick={this.singUp}/>
				</div>
			</div></div>
            
		</form>

        );
    }
}

const mapStateToProps = (state) => {
	return state;
};


export default connect(mapStateToProps)(RegisterPage);
