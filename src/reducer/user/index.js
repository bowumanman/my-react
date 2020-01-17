const userInfo = (state = {token: null}, action) => {
    switch(action.type) {
        case 'SET_USER_INFO':
            const userInfo = Object.assign({}, state, action.userInfo);
            return userInfo;
        case 'DELETE_USER_INFO':
            return Object.assign({}, {token: null});
        default:
            return state;
    }
};
export default userInfo;