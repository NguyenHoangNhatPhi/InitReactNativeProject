import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

import app from './app';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['app']
}


const reducerRoot = combineReducers({
    app
});

export default persistReducer(persistConfig, reducerRoot);