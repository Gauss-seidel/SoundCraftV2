import React, { useState } from 'react';
import { Search } from 'lucide-react';
//Estilos
import '../../styles/EventStyles/searchBar.css';
//Interfaces
import type { SearchBarProps } from '../../types/eventsTypes/interfaces';


const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearch('');
    onSearch('');
  };

  return (
    <div className="search-bar">
      <div className="search-bar__container">
        <Search className="search-bar__icon" size={20} />
        <input
          type="text"
          placeholder="Buscar combos por nombre o capacidad..."
          value={search}
          onChange={handleChange}
          className="search-bar__input"
        />
        {search && (
          <button className="search-bar__clear" onClick={handleClear}>
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;