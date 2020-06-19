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
        let newVal = [...state];
        state = newVal.map(todo => {
            if(todo.id === action.id){
                return {...todo, data: action.data}
            }else{
                return todo
            }
        })
        return newVal;
    }
    else {
        return state;
    }
}

export default todoReducer;