import {compose, createStore, combineReducers} from 'redux';
import persistState from 'redux-localstorage';
import session from './session/sessionStore';
import posts from './posts/posts';
import counter from './counter';

const rootReducer = combineReducers({
  posts: posts,
  counter: counter,
  session: session,
});

const enhancer = compose(persistState('session'));

const store = createStore(rootReducer, {}, enhancer);

export default store;
