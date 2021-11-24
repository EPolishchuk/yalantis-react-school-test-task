import axios from 'axios';
import { IEmployee } from '../interface/Employee.interface';

const getEmployee = () => {
  return axios.get<IEmployee[]>(
    'https://yalantis-react-school-api.yalantis.com/api/task0/users'
  );
};

export default getEmployee;
