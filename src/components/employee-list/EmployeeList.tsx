import Employee from '../employee/Employee';
import styled from 'styled-components';

const EmployeeList = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const Header = styled.h1`
    text-align: center;
  `;

  const EmployeesSection = styled.section`
    height: 100vh;
    overflow: auto;
  `;

  const EmployeesBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const EmployeesList = styled.div`
    padding: 1rem;
  `;

  return (
    <EmployeesSection>
      <Header>Employees</Header>
      <EmployeesBlock>
        {alphabet.map((letter) => (
          <EmployeesList>
            <h3 key={`${letter}-letters`}>{letter}</h3>
            <Employee key={`${letter}-employees`} letter={letter}></Employee>
          </EmployeesList>
        ))}
      </EmployeesBlock>
    </EmployeesSection>
  );
};

export default EmployeeList;
