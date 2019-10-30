// A recucer takes in (action, copy of current state)

function posts(state=[],action){
    console.log("The post will change!!!");
    console.log(state, action);
    return state;
}

export default posts;