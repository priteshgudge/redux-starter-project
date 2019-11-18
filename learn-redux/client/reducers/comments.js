// A recucer takes in (action, copy of current state)

function postComments(state=[], action){
    console.log("post comments");
    switch (action.type) {
        case "ADD_COMMENT":
            // Return state with new comment
            return [...state,{
                user: action.author,
                text: action.comment}];
        case "REMOVE_COMMENT":
            console.log("");
            return state;
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