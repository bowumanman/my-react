const setUserInfo = (userInfo) => {
    return {
        type: 'SET_USER_INFO',
        userInfo: userInfo
    };
};
export default {
    setUserInfo,
};
