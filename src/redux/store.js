import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist'

import sagaRoot from './saga';
import reducerRoot from './reducers';
import {authMiddleware} from './middlewares';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(authMiddleware,sagaMiddleware)
);

export default () => {
    let store = createStore(reducerRoot, enhancer);
    let persistor = persistStore(store);
    sagaMiddleware.run(sagaRoot);
    return { store, persistor }
}
