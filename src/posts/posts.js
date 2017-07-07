// story for posts



const inicialPostsCollections =[
		{ title: 'pierwszy', timestamp: 1},        
		{ title: 'drugi', timestamp: 2},        
		{ title: 'trzeci', timestamp: 3},        
		{ title: 'czwarty', timestamp: 4},        
		{ title: 'piąty', timestamp: 5},        
		{ title: 'szósty', timestamp: 6},        
		{ title: 'siódmy', timestamp: 20},];

let inicialState = {
    postCollections: [...inicialPostsCollections], 
    };


const posts = (state = inicialState, action) =>{
    switch(action.type){
        case 'ADDPOSTS':         
            return {...state,postCollections:[...state.postCollections,{title:action.post.title, timestamp: action.post.timestamp}] };
        case 'REMOVEPOSTS':         
            return {...state,postCollections: state.postCollections.filter(p=> p.timestamp!==action.timestamp)};
        default:
            return state;
    }
}

export default posts;