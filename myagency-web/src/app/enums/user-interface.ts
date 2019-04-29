import {UserRole} from './user-role.enum';

export interface User {
  uid: number;
  email: string;
  name: string;
  role: UserRole;
}
