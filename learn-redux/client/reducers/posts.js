// A recucer takes in (action, copy of current state)

function posts(state=[],action){
    //console.log("The post will change!!!");
    //console.log(state, action);
    switch (action.type) {
        case 'INCREMENT_LIKES':
            console.log("INcrementing LIkes: ");
            console.log(state,action);
            const i = action.index;
            return [
                ...state.slice(0,i),
                {...state[i],likes: state[i].likes + 1},
                ...state.slice(i+1)
            ];

        default:
            return state;
    }
}

export default posts;