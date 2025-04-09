import React from 'react';
import { filtredProps } from './types';
import './styles/FilterPanel.scss';

const LABELS = {
  SEARCH_NAME: 'Поиск по имени или email',
  FILTER_SITY: 'Фильтр по городу',
  FILTER_COMPANY: 'Фильтр по компании',
};

const FilterPanel: React.FC<filtredProps> = ({
  search,
  setSearch,
  city,
  setCity,
  company,
  setCompany,
}) => {
  return (
    <div className="filter-panel">
      <input
        type="text"
        className="filter-input"
        placeholder={LABELS.SEARCH_NAME}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="text"
        className="filter-input"
        placeholder={LABELS.FILTER_SITY}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        className="filter-input"
        placeholder={LABELS.FILTER_COMPANY}
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
    </div>
  );
};

export default FilterPanel;
