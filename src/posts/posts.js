// story for posts

const inicialPostsCollections = [];

let inicialState = {
  postCollections: [...inicialPostsCollections],
  postsToShow: '',
};

const posts = (state = inicialState, action) => {
  switch (action.type) {
    case 'SHOW_POST':
      return {...state, postsToShow: action.id};
    case 'FETCH-POST':
      return {...state, postCollections: [...action.payload]};
    default:
      return state;
  }
};

export default posts;
