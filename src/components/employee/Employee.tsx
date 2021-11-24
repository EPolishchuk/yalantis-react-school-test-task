import { useDispatch, useSelector } from 'react-redux';
import { IEmployee } from '../../interface/Employee.interface';
import { EmployeeState } from '../../interface/EmployeeState.interface';
import {
  addActiveStatus,
  removeActiveStatus,
} from '../../store/reducers/userSlice';

const Employee = (props: { letter: string }) => {
  const ACTIVE = 1;
  const NOT_ACTIVE = 0;
  const dispatch = useDispatch();
  const employees = useSelector(
    (state: EmployeeState) => state.employees.employeeList
  );
  let loading = useSelector((state: EmployeeState) => state.employees.loading);
  let users = employees.filter(
    (employee: IEmployee) => employee.firstName[0] === props.letter
  );

  return (
    <div key={`${props.letter}-employee-list`}>
      {!loading && users?.length ? (
        users
          .sort((a: IEmployee, b: IEmployee) =>
            a.firstName.localeCompare(b.firstName)
          )
          .map((employee: IEmployee) => (
            <>
              <h5>{`${employee.firstName} ${employee.lastName}`}</h5>
              <div>
                <p>
                  <input
                    type='radio'
                    name={employee.id}
                    id={employee.id + ACTIVE}
                    value={ACTIVE}
                    onClick={() => dispatch(addActiveStatus(employee))}
                  />
                  <label htmlFor={employee.id + ACTIVE}>Active</label>
                </p>
                <p>
                  <input
                    type='radio'
                    name={employee.id}
                    id={employee.id + NOT_ACTIVE}
                    value={NOT_ACTIVE}
                    onClick={() => dispatch(removeActiveStatus(employee))}
                  />
                  <label htmlFor={employee.id + NOT_ACTIVE}>Not active</label>
                </p>
              </div>
            </>
          ))
      ) : (
        <p>No Employees</p>
      )}
    </div>
  );
};

export default Employee;
