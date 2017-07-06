import React from "react";
import {connect} from "react-redux";


class Home extends React.Component{
    decrement = () => this.props.dispatch({type: "DECREMENT"});
        increment = () => this.props.dispatch({type: "INCREMENT"});


    render (){
        return(
            
            <div>home { this.props.counter} 
            <button onClick={this.decrement} >decrement</button>
            <button onClick={this.increment} >increment</button>
            </div>

        );

    }
}

const mapStateToProps = (state) => {
    return {
        counter:state.counter};
}


export default connect(mapStateToProps)(Home);

