import { createStore, combineReducers } from 'redux';
import usersReducer from './reducers';

// Комбинируем все редьюсеры
const rootReducer = combineReducers({
  users: usersReducer,
});
// Создание Redux-хранилища
export const store = createStore(rootReducer);
// Тип состояния всего хранилища
export type RootState = ReturnType<typeof rootReducer>;