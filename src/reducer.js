const initState = [];

const todoReducer = (state = initState, action) => {
    if (action.type === 'ADD_TODO') {
        state = [...state, {data: action.data, id: action.id}];
        return state;
    }
    else if (action.type === 'DELETE_TODO') {
        state = state.filter(item => item.id !== action.id );
        return state;
    }
    else if (action.type === 'EDIT_TODO') {
        state = state.map(todo => {
            if(todo.id === action.id){
                todo.data = action.data;
                return todo
            }else {
                return todo
            }
        })
        return state;
    }
    else {
        return state;
    }
}

export default todoReducer;