// A recucer takes in (action, copy of current state)

function postComments(state=[], action){
    switch (action.type) {
        case "ADD_COMMENT":
            console.log("post comments");
            // Return state with new comment
            return [...state,{
                user: action.author,
                text: action.comment}];
        case "REMOVE_COMMENT":
            console.log("Removing a comment");
            return [...state.slice(0,action.i),
                ...state.slice(action.i+1, state.length)];
        default:
            return state;

    }
}

function comments(state=[],action){
    console.log("Comment will change");
    //console.log(state, action);
    if (typeof (action.postId !== "undefined")){
        return {
            // Take the current state
            ...state,
            // OVerwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action),

        }
    }
    return state;
}

export default comments;