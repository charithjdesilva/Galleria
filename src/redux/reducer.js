import posts from "../data/posts";
import { combineReducers } from "redux";

// initial value of comments will be an empty array
const commentReducer = (state={}, action) => {
    switch(action.type){
        case 'ADD_COMMENT':
            if(!state[action.postId]){  // if the comment state is undefined to the relevent postId
                return {...state, [action.postId]:[action.comment]};  // in es6 to declare a variable inside object use []
            }
            else{
                return {...state, [action.postId]:[...state[action.postId], action.comment]};
            }
        default:
            return state
    }
}

const postReducer = (state = posts, action) => {
    switch(action.type){
        case 'REMOVE_POST':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case 'ADD_POST':
            return [...state, action.post];
        // for other type of reducers this will return same state (in redux emit of an action goes to every reducer) 
        default:
            return state;
    }
}

// combine reducers, because in index.js the store can have onlyh one reducer
const rootReducer = combineReducers({postReducer, commentReducer})

export default rootReducer;