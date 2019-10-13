import { put, takeLatest, all, join } from "redux-saga/effects";

function* testSaga(action) {
    console.log('TEST_SAGA');
    yield put({type:'TEST_SAGA_SUCCESS'})
}


export default function* saga() {
    yield all([
        takeLatest('TEST_SAGA', testSaga),
    ])
}