const initial = {
    users: [],
}

export const userReducer = (state=initial,action) => {
    switch(action.type) {
        case 'GET_ALL_USERS_SUCCESS':
            return {...state, users: action.data};
        case 'GET_ALL_USERS_FAILED':
            return {...state, message: action.message}
        default:
            return state;
    }
}