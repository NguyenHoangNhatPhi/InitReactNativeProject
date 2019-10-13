import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { name as appName } from './app.json';
import configureStore from './src/redux/store';
import Splash from './src/screens/Splash';

const App = () => {
    const { persistor, store } = configureStore();
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Splash />
            </PersistGate>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => App);
