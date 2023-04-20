import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import counterReducer from "./Counter/counter.reducer";
import { counterSaga } from "./Counter/counter.saga";

const combinedReducers = combineReducers({ counterReducer });
const SagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers, applyMiddleware(SagaMiddleware))

function* rootSaga() {
    yield all([counterSaga()])
}

SagaMiddleware.run(rootSaga);

export default store;