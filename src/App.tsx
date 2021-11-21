import React from 'react';
import EmployeeBirthdaysList from './components/emlpoyee-birthdays/EmployeeBirthdaysList';
import EmployeeList from './components/employee-list/EmployeeList';
import store from './store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className='employee'>
        <EmployeeList></EmployeeList>
        <EmployeeBirthdaysList></EmployeeBirthdaysList>
      </div>
    </Provider>
  );
};

export default App;
