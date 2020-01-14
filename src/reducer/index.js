import {combineReducers} from 'redux';
import globalLoading from './loading';
import userInfo from './user';

export default combineReducers({
    globalLoading,
    userInfo
});