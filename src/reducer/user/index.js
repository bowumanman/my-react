const userInfo = (state = {token: null}, action) => {
    switch(action.type) {
        case 'SET_USER_INFO':
            return Object.assign({}, state, action.userInfo);    
        default: 
            return state;   
    }
};
export default userInfo;