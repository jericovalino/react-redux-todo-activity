const initState = [];

const todoReducer = (state = initState, action) => {
    if (action.type === 'ADD_TODO') {
        state = [...state, action.data];
        return state;
    }
    else if (action.type === 'DELETE_TODO') {
        let val = [...state];
        val.splice(action.id, 1);
        return val;
    }
    else {
        return state;
    }
}

export default todoReducer;