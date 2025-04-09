import { UserTypes } from './types';
import { Link } from 'react-router-dom';
import './styles/UserCard.scss';

const LABELS = {
  EMAIL: 'Email:',
  PHONE: 'Телефон:',
  ADRES_STREET: 'Улица:',
  ADRES_SUITE: 'Квартира/Офис:',
  CITY: 'Город:',
  ADRES_ZIPCODE: 'Почтовый индекс:',
  LATITUDE: 'Latitude:',
  LONGITUDE: 'Longitude:',
  COMPANY_NAME: 'Название компании:',
  COMPANY_CATCH_PHRAZE: 'Описание компании:',
  COMPANY_BS: 'BS компании:',
  WEBSITE: 'Сайт:',
};

const UserCard = ({ user }: { user: UserTypes }) => {
  return (
    <Link to={`/user/${user.id}`} className="user-card-link">
      <div className="user-card">
        <h2>{user.name}</h2>
        <p>{`${LABELS.EMAIL} ${user.email}`}</p>
        <p>{`${LABELS.PHONE} ${user.phone}`}</p>
        <p>{`${LABELS.ADRES_STREET} ${user.address.street}`}</p>
        <p>{`${LABELS.ADRES_SUITE} ${user.address.suite}`}</p>
        <p>{`${LABELS.CITY} ${user.address.city}`}</p>
        <p>{`${LABELS.ADRES_ZIPCODE} ${user.address.zipcode}`}</p>
        <p>{`${LABELS.LATITUDE} ${user.address.geo.lat}, ${LABELS.LONGITUDE} ${user.address.geo.lng}`}</p>
        <p>{`${LABELS.COMPANY_NAME} ${user.company.name}`}</p>
        <p>{`${LABELS.COMPANY_CATCH_PHRAZE} ${user.company.catchPhrase}`}</p>
        <p>{`${LABELS.COMPANY_BS} ${user.company.bs}`}</p>
        <p>{`${LABELS.WEBSITE} ${user.website}`}</p>
      </div>
    </Link>
  );
};

export default UserCard;
