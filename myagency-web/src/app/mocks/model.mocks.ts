import {User} from '../enums/user-interface';
import {UserRole} from '../enums/user-role.enum';

export const Users: User[] = [
  {uid: 1, email: 'm1@mail.com', name: 'Anja', location: 'USA', role: UserRole.MODEL},
  {uid: 2, email: 'm2@mail.com', name: 'Max', location: 'USA', role: UserRole.MODEL},
  {uid: 3, email: 'm3@mail.com', name: 'Uschi', location: 'USA', role: UserRole.MODEL},
  {uid: 4, email: 'm4@mail.com', name: 'Mustafa', location: 'USA', role: UserRole.MODEL},
  {uid: 5, email: 'm5@mail.com', name: 'Arthur', location: 'USA', role: UserRole.MODEL},
  {uid: 6, email: 'm6@mail.com', name: 'John', location: 'USA', role: UserRole.MODEL},
  {uid: 7, email: 'm7@mail.com', name: 'Mohammad', location: 'USA', role: UserRole.MODEL}
];
