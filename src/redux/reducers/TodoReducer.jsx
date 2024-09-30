const initialState = {
    todoAr: []
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                todoAr: [...state.todoAr, action.payload]
            }
        case "EDIT":
            return {
                ...state,
                todoAr: state.todoAr.map((todo) => todo.id === action.payload ? { ...todo, editable: !todo.editable } : todo)
            }

        case "DELETE":
            return {
                ...state,
                todoAr: [...state.todoAr.filter((todo) => action.payload.id !== todo.id)]
            }
        default:
            return state;
    }

}

export default TodoReducer