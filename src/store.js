import { createStore, combineReducers } from "redux";


const counter = (state = 0, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;  
    }
};

const posty =[
		{ title: 'pierwszy', timestamp: 1},        
		{ title: 'drugi', timestamp: 2},        
		{ title: 'trzeci', timestamp: 3},        
		{ title: 'czwarty', timestamp: 4},        
		{ title: 'piąty', timestamp: 5},        
		{ title: 'szósty', timestamp: 6},        
		{ title: 'siódmy', timestamp: 20},];

let inicialState = {
    postCollections: [...posty], 
    postCounter: posty.length
    };


const posts = (state = inicialState, action) =>{
    switch(action.type){
        case 'ADDPOSTS':         
            return {...state,postCounter: state.postCounter+1,postCollections:[...state.postCollections,{title:action.post.title, timestamp: action.post.timestamp}] };
        case 'REMOVEPOSTS':         
            return {...state,postCounter: state.postCounter-1, postCollections: state.postCollections.filter(p=> p.timestamp!==action.timestamp)};
        default:
            return state;
    }
}

const inicialUser = {
    mail: "",
}

const session = (state = inicialUser, action) =>{
    switch(action.type){
        case 'SING_IN':         
            return {mail:action.mail};
        case 'SING_OUT':         
            return inicialUser;
        default:
            return state;
    }  
}


const rootReducer = combineReducers({
    posts: posts,
    counter: counter,
    session:session
});

const store = createStore(rootReducer);


export default store;