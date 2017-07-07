import React from "react"; 
import Button from "../user-inferface/Button";
import styled from 'styled-components';
import { connect} from "react-redux";
 

class Post extends React.Component{  
    constructor(props){
        super(props);
        this.id = this.props.timestamp;
    }

    remove = () =>{
    this.props.Usun(this.props.timestamp);
    }

    show = () => {
    this.props.show(this.props.timestamp);

    }

    render() {    
        return (
        <div>
            <StypedPost >
                <div>title: {this.props.title} </div>
                <div>timestamp: {this.props.timestamp}</div><br/>            
                <Button onClick={this.remove} label="USUN" />
                <Button onClick={this.show} label="Show post" />
            </StypedPost>
        </div>            
        );  
    } 
} 

const StypedPost = styled.div`
    border:1px solid #aaa;
    background-color: #ddd; 
    padding: 5px;
    margin-bottom: 5px;
    dispaly:flex;
    justifyContent: space-between;
    &:hover{
        opacity:0.7;
    }
`;

const mapStateToProps = (state) => {
	return state;
};



export default connect(mapStateToProps)(Post);
