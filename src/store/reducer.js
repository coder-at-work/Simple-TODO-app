const initialState = {
    toDos: [],
    completed: [],
    active: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { task } = action.payload;
            return {
                ...state,
                toDos: [...state.toDos, task],
                active: [...state.active, task]
            };
        case "REMOVE_TODO":
            const { index } = action.payload;
            return {
                ...state,
                completed: [...state.completed, state.active[index]],
                active: [...state.active.slice(0, index), ...state.active.slice(index + 1)]
            };
        default:
            return state;
    }
};
