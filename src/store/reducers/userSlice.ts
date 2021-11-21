import { createSlice } from '@reduxjs/toolkit';
import { IEmployee } from '../../interface/Employee.interface';

export const userSlice = createSlice({
  name: 'employee',
  initialState: [] as IEmployee[],
  reducers: {
    addActiveStatus: (state, action) => {
      const alreadyInState = state.find(
        (employee) => employee.id === action.payload.id
      );
      if (!alreadyInState) {
        state.push(action.payload);
      }
    },
    removeActiveStatus: (state, action) => {
      return state.filter((employee) => employee.id !== action.payload.id);
    },
  },
});

export const { addActiveStatus, removeActiveStatus } = userSlice.actions;

export default userSlice.reducer;
