import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducers';

// RootState tipi reducer dosyasında zaten var
export type { RootState } from './reducers/rootReducers';

// Store oluştur
const store = createStore(rootReducer, undefined, applyMiddleware(thunk, logger));
export type AppDispatch = typeof store.dispatch;
export default store;
