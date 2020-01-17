const setUserInfo = (userInfo) => {
    return {
        type: 'SET_USER_INFO',
        userInfo: userInfo
    };
};
const deleteUserInfo = () => {
    return {
        type: 'DELETE_USER_INFO',
        userInfo: {token: null}
    };
};
export default {
    setUserInfo,
    deleteUserInfo
};
