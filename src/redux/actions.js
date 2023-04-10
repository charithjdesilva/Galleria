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