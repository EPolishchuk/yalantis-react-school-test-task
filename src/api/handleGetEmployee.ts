import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { setEmployee } from '../store/reducers/userSlice';
import getEmployee from './getEmployee';

export function* handleGetUser() {
  try {
    const response: AxiosResponse = yield call(getEmployee);
    const { data } = response;
    yield put(setEmployee([...data]));
  } catch (error) {
    console.log(error);
  }
}
