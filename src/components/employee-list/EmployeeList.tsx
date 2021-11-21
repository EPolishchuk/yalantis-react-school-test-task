import { users } from '../../mocks/mock';
import Employee from '../employee/Employee';

const EmployeeList = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  return (
    <section>
      <h1>Employees</h1>
      {alphabet.map((letter) => (
        <div>
          <h3 key={`${letter}-letters`}>{letter}</h3>

          <Employee
            key={`${letter}-employees`}
            employees={users.filter(
              (employee) =>
                employee.firstName[0].toLowerCase() === letter.toLowerCase()
            )}
            letter={letter}
          ></Employee>
        </div>
      ))}
    </section>
  );
};

export default EmployeeList;
