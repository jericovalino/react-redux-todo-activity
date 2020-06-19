const initState = [];

const todoReducer = (state = initState, action) => {
    if (action.type === 'ADD_TODO') {
        state = [...state, action.data];
        return state;
    }else{
        return state;
    }
}

export default todoReducer;