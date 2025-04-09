import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './features/users/UsersList';
import { fetchUsers } from './api/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';

const LABELS = {
  LOADING: 'Загрузка',
};

// Ленивая загрузка компонента UserDetails
const UserDetails = React.lazy(() => import('./features/users/UserDetails'));

const App = () => {
  const dispatch = useDispatch();
  const { users, lastFetched } = useSelector((state: RootState) => state.users);

  // Загружаем пользователей при монтировании компонента
  const loadUsers = async () => {
    const now = Date.now();

  // если данные загружались менее 5 минут назад, не загружаем
  if (lastFetched && now - lastFetched < 5 * 60 * 1000) return;
    const res = await fetchUsers();
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: res });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Router>
      {/* Suspense для ленивой загрузки компонента UserDetails */}
      <Suspense fallback={<div>{LABELS.LOADING}</div>}>
        <Routes>
          <Route path="/" element={<UsersList users={users} />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
