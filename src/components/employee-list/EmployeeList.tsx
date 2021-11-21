import styled from 'styled-components';
import { users } from '../../mocks/mock';
import Employee from '../employee/Employee';

const EmployeeList = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  return (
    <div>
      <h1>Employees</h1>
      {alphabet.map((letter) => (
        <div>
          <h3>{letter}</h3>

          <Employee
            key={letter}
            employees={users.filter(
              (employee) =>
                employee.firstName[0].toLowerCase() === letter.toLowerCase()
            )}
            letter={letter}
          ></Employee>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
