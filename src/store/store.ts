import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';
import createSagaMiddleware from 'redux-saga';
import { exportSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    employees: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(exportSaga);
