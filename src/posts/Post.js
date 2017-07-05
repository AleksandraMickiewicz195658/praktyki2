import React from "react"; 
import Button from "../user-inferface/Button";

class Post extends React.Component 
{  
constructor(props){
super(props);
this.id = this.props.timestamp;
}

remove = () =>{
this.props.Usun(this.props.timestamp);


}


render() {    
return (
<div style={{border:'1px solid #aaa', 
backgroundColor: '#ddd', 
padding: '5px', 
marginBottom: '5px',
dispaly:'flex',
justifyContent: 'space-between'}}>

<div >title: {this.props.title} </div>
<div>timestamp: {this.props.timestamp}</div><br/>
<Button onClick={this.remove} label="USUN" />
</div>    
);  
} 
} 


export default Post;
