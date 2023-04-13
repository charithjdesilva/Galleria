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
        }).catch((error) => {
            console.log(error);
        });
    }
}

// remove post from firebase database
export function startRemovingPost(index, id){
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(index))
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

// load post
export const loadPost = (posts) => {
    return{
        type: 'LOAD_POSTS',
        posts: posts
    }
}

// adding comments to firebase databse
export function startAddingComment(comment, postId){
    return (dispatch) => {
        return database.ref(`comments/${postId}`).push(comment).then(
            () => {
                dispatch(addComment(comment, postId))
            }
        ).catch((error) => {
            console.log(error);
        });
    }
}

// loading comments from firebase databse
export function startLoadingComments(){
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot) => {
            let comments = {}
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())  // we only need the value of the comment, not the commentsId
            })
            dispatch(loadComments(comments))
        }).catch((error) => {
            console.log(error);
        });
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

// load comments
export const loadComments = (comments) => {
    return{
        type: 'LOAD_COMMENTS',
        comments: comments
    }
}
