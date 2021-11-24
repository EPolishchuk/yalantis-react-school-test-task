import { IEmployee } from './../../interface/Employee.interface';
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'employee',
  initialState: {
    activeList: [] as IEmployee[],
    employeeList: [] as IEmployee[],
    loading: true,
  },
  reducers: {
    loadEmployees: () => {},
    setEmployee: (state, action) => {
      state.employeeList = action.payload;
      state.loading = false;
    },
    addActiveStatus: (state, action) => {
      const alreadyInState = state.activeList.find(
        (employee) => employee.id === action.payload.id
      );
      if (!alreadyInState) {
        state.activeList.push(action.payload);
      }
    },
    removeActiveStatus: (state, action) => {
      state.activeList = state.activeList.filter(
        (employee) => employee.id !== action.payload.id
      );
    },
  },
});

export const {
  setEmployee,
  loadEmployees,
  addActiveStatus,
  removeActiveStatus,
} = userSlice.actions;

export default userSlice.reducer;
