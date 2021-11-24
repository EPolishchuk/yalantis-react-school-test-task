import { IEmployee } from './Employee.interface';

export interface EmployeeState {
  employees: {
    activeList: IEmployee[];
    employeeList: IEmployee[];
    loading: boolean;
  };
}
