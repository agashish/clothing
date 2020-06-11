import { createStore, applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist';
import {logger} from 'redux-logger';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
// import {fetchCollectionsStart, incrementSaga} from './../redux/shop/shop.sagas'; 
// import thunk from 'redux-thunk';

import rootSagas from './../redux/root-sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(
    rootSagas
); // Add all saga's inside the run function 

export const persistor = persistStore(store);

export default {store, persistor};