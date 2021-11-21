import React from 'react';
import EmployeeBirthdays from './components/emlpoyee-birthdays/EmployeeBirthdays';
import EmployeeList from './components/employee-list/EmployeeList';
import store from './store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className='employee'>
        <EmployeeList></EmployeeList>
        <EmployeeBirthdays></EmployeeBirthdays>
      </div>
    </Provider>
  );
};

export default App;
