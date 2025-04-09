import { UserAction } from '../features/users/userActions';
import { UsersState } from '../features/users/usersState';

// Начальное состояние хранилища пользователей
const initialState: UsersState = {
  users: [],
  error: null,
  lastFetched: null,
};

// Редьюсер для обработки действий, связанных с пользователями
const usersReducer = (state = initialState, action: UserAction): UsersState => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return { ...state, users: action.payload, lastFetched: Date.now(), };
      default:
      return state;
  }
};

export default usersReducer;
