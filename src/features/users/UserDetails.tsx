import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserCard from './UserCard';
import { UserTypes } from './types';
import { getUserById } from '../../api/api';
import './styles/UserDetails.scss';

const LABELS = {
  LOADING: 'Загрузка',
  NOT_FOUND: 'Пользователь не найден:',
};

const UserDetails = () => {
  const { id } = useParams<{ id: string }>(); // Получаем id из URL
  const [user, setUser] = useState<UserTypes | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(id) // Запрашиваем данные о пользователе
      .then((data: UserTypes) => setUser(data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="loading">{LABELS.LOADING}</div>;
  if (!user) return <div className="not-found">{LABELS.NOT_FOUND}</div>;

  return (
    <div className="user-details-container">
      <div className="user-card-container">
        <UserCard user={user} />
      </div>
    </div>
  );
};

export default UserDetails;
