import { UserTypes } from '../features/users/types';

export function filterUsers(
  allUsers: UserTypes[],
  query: string,
  location: string,
  organization: string
) {
  const queryLower = query.toLowerCase();
  const locationLower = location.toLowerCase();
  const organizationLower = organization.toLowerCase();

  return allUsers.filter((user) => {
    // Проверка совпадений по запросу (имя или email)
    const isMatchQuery =
      user.name.toLowerCase().includes(queryLower) ||
      user.email.toLowerCase().includes(queryLower);
    // Проверка совпадений по городу
    const isMatchLocation = location
      ? user.address.city.toLowerCase().includes(locationLower)
      : true;
    // Проверка совпадений по организации
    const isMatchOrganization = organization
      ? user.company.name.toLowerCase().includes(organizationLower)
      : true;
    // Возвращаем true, если пользователь удовлетворяет всем фильтрам
    return isMatchQuery && isMatchLocation && isMatchOrganization;
  });
}
