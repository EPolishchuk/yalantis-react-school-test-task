import { Epmloyee } from '../../interface/Employee.interface';

const Employee = (props: { employees: Epmloyee[]; letter: string }) => {
  const ACTIVE = 1;
  const NOT_ACTIVE = 0;
  return (
    <>
      {props.employees.length ? (
        props.employees
          .sort((a, b) => a.firstName.localeCompare(b.firstName))
          .map((employee) => (
            <>
              <h5>{`${employee.firstName} ${employee.lastName}`}</h5>
              <div>
                <p>
                  <input
                    type='radio'
                    name={employee.id}
                    id={employee.id + ACTIVE}
                    value={ACTIVE}
                  />
                  <label htmlFor={employee.id + ACTIVE}>Active</label>
                </p>
                <p>
                  <input
                    type='radio'
                    name={employee.id}
                    id={employee.id + NOT_ACTIVE}
                    value={NOT_ACTIVE}
                  />
                  <label htmlFor={employee.id + NOT_ACTIVE}>Not active</label>
                </p>
              </div>
            </>
          ))
      ) : (
        <p>No Employees</p>
      )}
    </>
  );
};

export default Employee;
