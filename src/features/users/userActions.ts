import { UserTypes } from './types';

export type UserAction = { type: 'FETCH_USERS_SUCCESS'; payload: UserTypes[] };
