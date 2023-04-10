import {database} from "../database/config"

// Get a reference to a specific location in the database
// const ref = database.ref('path/to/location');

// add post to database
export function startAddingPost(post){
    return (dispatch) => {
        return database.ref('posts').update({ [post.id]: post }).then(() => {
            dispatch(addPost(post));
        }).catch((error) => {
            console.log(error);
        });
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