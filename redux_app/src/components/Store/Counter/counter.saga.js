import { put, takeLatest, tekeLatest } from "redux-saga/effects";
import { INCREMENT_ASYNC, DECREMENT_ASYNC, increment, decrement } from "./counter.action";

function* incrementAsyncSaga() {
    console.log("Increment saga called")
    // yield new promise ((resolve)=> setTimeout{resolve, 1000})
    yield put(increment())
}

function* decrementAsyncSaga() {
    console.log("Decrement saga called")
    // yield new promise ((resolve)=> setTimeout{resolve, 1000})
    yield put(decrement())
}

export function* counterSaga() {
    yield takeLatest(INCREMENT_ASYNC, incrementAsyncSaga);
    yield takeLatest(DECREMENT_ASYNC, decrementAsyncSaga);
}