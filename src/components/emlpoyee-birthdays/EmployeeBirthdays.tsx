import React from 'react';
import { IEmployee } from '../../interface/Employee.interface';

const EmployeeBirthdays = (props: {
  employees: IEmployee[];
  month: string;
}) => {
  const formatDate = (dateAsString: string) => {
    const date = new Date(dateAsString);
    return `${date.getDay()} ${date.toLocaleString('en-us', {
      month: 'long',
    })}, ${date.getFullYear()}`;
  };
  return (
    <>
      <h3>{props.month}</h3>
      {props.employees.length
        ? props.employees
            .sort((a, b) => a.lastName.localeCompare(b.lastName))
            .map((employee) => (
              <p>{`${employee.lastName} ${employee.firstName} — ${formatDate(
                employee.dob
              )}`}</p>
            ))
        : ''}
    </>
  );
};

export default EmployeeBirthdays;
