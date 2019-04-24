import {UserRole} from './user-role.enum';

export interface User {
  uid: string;
  email: string;
  photoURL: string;
  catchPhrase?: string;
  role: UserRole;
}
