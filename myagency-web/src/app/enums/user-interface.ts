import {UserRole} from './user-role.enum';

export interface User {
  uid: string;
  email: string;
  name: string;
  location: string;
  height: string;
  size: string;
  role: UserRole;
}
