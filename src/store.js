import {createStore} from "redux";

const posty =[
		{ title: 'pierwszy', timestamp: 1},        
		{ title: 'drugi', timestamp: 2},        
		{ title: 'trzeci', timestamp: 3},        
		{ title: 'czwarty', timestamp: 4},        
		{ title: 'piąty', timestamp: 5},        
		{ title: 'szósty', timestamp: 6},        
		{ title: 'siódmy', timestamp: 20},];

let inicialState = {
    posts: [...posty], 

	counter: posty.length,
};


const reducer = (state = inicialState, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return {...state, counter   : state.counter+1};
        case 'DECREMENT':
            return {...state, counter   : state.counter-1};
        case 'ADDPOSTS':         
            return {counter: state.counter+1, posts:[...state.posts,{title:action.post.title, timestamp: action.post.timestamp}] };
        case 'REMOVEPOSTS':         
            return {counter: state.counter-1, posts: state.posts.filter(p=> p.timestamp!==action.timestamp)};
        default:
            return state;
    }
}

const store = createStore(reducer);


export default store;