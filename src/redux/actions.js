import { func } from "prop-types";
import {database} from "../database/config"

// Get a reference to a specific location in the database
// const ref = database.ref('path/to/location');

// add post to database
export function startAddingPost(post){
    return (dispatch) => {
        // .then() invokes as soon as function chainned it suceed, which is update()
        return database.ref('posts').update({ [post.id]: post }).then(() => {
            dispatch(addPost(post));
        }).catch((error) => {
            console.log(error);
        });
    }
}

// load posts from firebase database
export function startLoadingPost(){
    return (dispatch) => {
         // .on() is realtime (for every change in db it invoke the function) // .once() is happening once
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPost(posts))
        })
    }
}

// remove post from firebase database
export function startRemovingPost(index, id){
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(index))
        })
    }
}

// remove post
export const removePost = (index) => {
    return {
        type: 'REMOVE_POST',
        index: index
    }
}

// add post
export const addPost = (post) => {
    return{
        type: 'ADD_POST',
        post: post
    }
}

// add comment
export const addComment = (comment, postId) => {
    return{
        type: 'ADD_COMMENT',
        comment: comment,
        postId : postId
    }
}

// load post
export const loadPost = (posts) => {
    return{
        type: 'LOAD_POSTS',
        posts: posts
    }
}