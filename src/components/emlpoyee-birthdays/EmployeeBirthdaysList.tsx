import { useSelector } from 'react-redux';
import styled from 'styled-components';
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
  const BirthdaySection = styled.section`
    height: 100vh;
    overflow: auto;
  `;

  const Header = styled.h1`
    border-bottom: 1px solid #000;
    text-align: center;
    padding-bottom: 1.5rem;
  `;

  const BirthdayList = styled.section`
    border-left: 1px solid #000;
    min-height: 40vh;
    padding-left: 1.5rem;
    overflow: hidden;
  `;

  return (
    <BirthdaySection>
      <Header>Employees birthday</Header>
      <BirthdayList>
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
      </BirthdayList>
    </BirthdaySection>
  );
};

export default EmployeeBirthdaysList;
