
import { put, takeEvery } from 'redux-saga/effects'

export function* incrementAsync() {
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
