import EmployeeBirthdaysList from './components/emlpoyee-birthdays/EmployeeBirthdaysList';
import EmployeeList from './components/employee-list/EmployeeList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadEmployees } from './store/reducers/userSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEmployees());
  }, [dispatch]);

  return (
    <div className='employee'>
      <EmployeeList></EmployeeList>
      <EmployeeBirthdaysList></EmployeeBirthdaysList>
    </div>
  );
};

export default App;
