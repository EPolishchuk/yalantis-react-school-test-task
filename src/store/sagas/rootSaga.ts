import { loadEmployees } from '../reducers/userSlice';
import { takeLatest } from 'redux-saga/effects';
import { handleGetUser } from '../../api/handleGetEmployee';

export function* exportSaga() {
  yield takeLatest(loadEmployees.type, handleGetUser);
}
