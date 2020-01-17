import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist'; // redux 本地化存储
import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const persistConfig = {
    key: 'root', // key是放入localStorage中的key
    storage: storage,
    // stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};
const myPersistReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(myPersistReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
// const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;