import React from 'react';
import { IEmployee } from '../../interface/Employee.interface';

const EmployeeBirthdays = (props: {
  employees: IEmployee[];
  month: string;
}) => {
  const formatDate = (dateAsString: string) => {
    const date = new Date(dateAsString);
    return `${date.getDate()} ${date.toLocaleString('en-us', {
      month: 'long',
    })}, ${date.getFullYear()}`;
  };
  return (
    <div key={`${props.month}-employee-dob-list`}>
      <h3>{props.month}</h3>
      {props.employees.length ? (
        props.employees
          .sort((a, b) => a.lastName.localeCompare(b.lastName))
          .map((employee) => (
            <p>{`${employee.lastName} ${employee.firstName} — ${formatDate(
              employee.dob
            )}`}</p>
          ))
      ) : (
        <p>No Employees</p>
      )}
    </div>
  );
};

export default EmployeeBirthdays;
