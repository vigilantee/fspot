import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { createTransform } from 'redux-persist';

import { logger } from 'redux-logger';
import rootReducer from './reducers';
import App from './containers/App';
import rootSaga from './sagas';
import omit from 'lodash/omit'

const blacklistPaths = ['menu.loaded','menu.menu'];

const persistConfig = {
  key: 'root',
  storage,
	blacklist: blacklistPaths.filter(a => !a.includes('.')),
	transforms: [
		// nested blacklist-paths require a custom transform to be applied
		createTransform((inboundState, key) => {
			const blacklistPaths_forKey = blacklistPaths.filter(path => path.startsWith(`${key}.`)).map(path => path.substr(key.length + 1));
			return omit(inboundState, ...blacklistPaths_forKey);
		}, null),]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, logger),
);
const persistor = persistStore(store)



sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root'),
);

