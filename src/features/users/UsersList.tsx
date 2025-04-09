import { useEffect, useState } from 'react';
import { UserTypes } from './types';
import UserCard from './UserCard';
import FilterPanel from './FilterPanel';
import { filterUsers } from '../../utils/utils';
import './styles/UserCards.scss';

const UsersList = ({ users }: { users: UserTypes[] }) => {
  // Состояния для фильтрации пользователей
  const [search, setSearch] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<UserTypes[]>(users);

  // Эффект для применения фильтров
  useEffect(() => {
    setFilteredUsers(filterUsers(users, search, cityFilter, companyFilter));
  }, [users, search, cityFilter, companyFilter]);

  return (
    <div>
      <FilterPanel
        search={search}
        setSearch={setSearch}
        city={cityFilter}
        setCity={setCityFilter}
        company={companyFilter}
        setCompany={setCompanyFilter}
      />

      <div className="userList">
        {filteredUsers.map((user: UserTypes) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
