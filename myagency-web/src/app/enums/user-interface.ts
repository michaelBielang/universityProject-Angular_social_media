import {UserRole} from './user-role.enum';

export interface User {
  uid: string;
  email: string;
  role: UserRole;
  street?: string;
  city?: string;
  postcode?: string;
  country?: string;
}

export interface Model extends User {
  title?: string;
  lastName?: string;
  firstName?: string;
  birthday?: string;
  height?: number;
  hairColor?: string;
  eyeColor?: string;
  confectionSize?: number;
  hipSize?: number;
  waistSize?: number;
  bustSize?: number;
  shoeSize?: number;
  profilePicture?: string;
  polaroids?: string[];
  sedCard?: string[];
}

export interface Client extends User {
  companyName?: string;
  profilePicture?: string;
  companyDescription?: string;
  contact?: string;
  phone?: string;
}
