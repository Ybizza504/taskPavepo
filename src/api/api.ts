import axios from 'axios';
import { UserTypes } from '../features/users/types';

// Функция для получения данных пользователей
export const fetchUsers = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
};

export const getUserById = async (id: string | undefined): Promise<UserTypes> => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
};
