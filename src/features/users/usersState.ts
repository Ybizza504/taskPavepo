import { UserTypes } from './types';

export type UsersState = {
  users: UserTypes[];
  error: string | null;
  lastFetched: number | null; 
};
