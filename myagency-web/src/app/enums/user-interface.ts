import {UserRole} from './user-role.enum';

export interface User {
  uid: string;
  email: string;
  role: UserRole;
}
