import { createStore, combineReducers } from "redux";
import session from "./session/sessionStore";
import posts from "./posts/posts";
import counter from "./counter";

const rootReducer = combineReducers({
    posts: posts,
    counter: counter,
    session:session
});

const store = createStore(rootReducer);


export default store;