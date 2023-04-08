// remove post
export const removePost = (index) => {
    return {
        type: 'REMOVE_POST',
        index: index
    }
}

// add post