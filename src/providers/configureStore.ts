import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../reducers";
import { rootSaga } from "../sagas";
import * as ENV from '../utils/env';

const loggerMiddleware = createLogger({
    collapsed: true
});

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initialState?: {}) => {
    const middlewares = [loggerMiddleware, sagaMiddleware];
    const enhancer = ENV.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(...middlewares))  :compose(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
};
