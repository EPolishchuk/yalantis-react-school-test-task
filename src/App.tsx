import React from 'react';
import EmployeeBirthdays from './components/emlpoyee-birthdays/EmployeeBirthdays';
import EmployeeList from './components/employee-list/EmployeeList';

function App() {
  return (
    <div className='employee'>
      <EmployeeList></EmployeeList>
      <EmployeeBirthdays></EmployeeBirthdays>
    </div>
  );
}

export default App;
