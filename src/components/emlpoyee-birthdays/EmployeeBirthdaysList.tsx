import { useSelector } from 'react-redux';
import { IEmployee } from '../../interface/Employee.interface';
import { EmployeeState } from '../../interface/EmployeeState.interface';
import EmployeeBirthdays from './EmployeeBirthdays';

const EmployeeBirthdaysList = () => {
  const employeeList = useSelector(
    (state: EmployeeState) => state.employees.activeList
  );
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
    <section>
      <h1>Employees birthday</h1>
      <div>
        {employeeList?.length ? (
          monthNames.map((month) => (
            <EmployeeBirthdays
              key={month}
              month={month}
              employees={employeeList.filter(
                (employee: IEmployee) => month === getMonthName(employee.dob)
              )}
            ></EmployeeBirthdays>
          ))
        ) : (
          <p>Employees List is empty</p>
        )}
      </div>
    </section>
  );
};

export default EmployeeBirthdaysList;
