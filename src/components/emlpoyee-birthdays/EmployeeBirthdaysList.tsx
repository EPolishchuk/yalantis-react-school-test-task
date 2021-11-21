import { useSelector } from 'react-redux';
import { EmployeeState } from '../../interface/EmployeeState.interface';
import EmployeeBirthdays from './EmployeeBirthdays';

const EmployeeBirthdaysList = () => {
  const employeeList = useSelector((state: EmployeeState) => state.activeList);
  const monthNames = [
    'November',
    'December',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
  ];
  const getMonthName = (dateAsString: string) => {
    const date = new Date(dateAsString);
    return date.toLocaleString('en-us', { month: 'long' });
  };

  return (
    <div>
      <h1>Employees birthday</h1>
      <div>
        {employeeList.length ? (
          monthNames.map((month) => (
            <EmployeeBirthdays
              key={month}
              month={month}
              employees={employeeList.filter(
                (employee) => month === getMonthName(employee.dob)
              )}
            ></EmployeeBirthdays>
          ))
        ) : (
          <p>Employees List is empty</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeBirthdaysList;
