import {UserRole} from './user-role.enum';

export interface User {
  uid: number;
  email: string;
  role: UserRole;
}
