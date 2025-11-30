import React, { useState } from 'react';
//Estilos
import '../../styles/EventStyles/comboGrid.css';
//Componentes
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import ComboCard from './ComboCard';
//Interfaces
import type { Combo } from '../../types/eventsTypes/interfaces'

interface ComboGridProps {
  combos: Combo[];
  onSelectCombo: (id: number) => void;
}

const ComboGrid: React.FC<ComboGridProps> = ({ combos, onSelectCombo }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ priceRange: 'all', capacity: 'all' });

  const filteredCombos = combos.filter(combo => {
    const matchesSearch = combo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         combo.capacity.includes(searchTerm);
    
    const matchesPrice = filters.priceRange === 'all' ||
                        (filters.priceRange === 'low' && combo.price <= 200) ||
                        (filters.priceRange === 'mid' && combo.price > 200 && combo.price <= 500) ||
                        (filters.priceRange === 'high' && combo.price > 500);
    
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="combo-grid">
      <div className="combo-grid__container">
        <div className="combo-grid__header">
          <h2 className="combo-grid__title">Nuestros Combos</h2>
          <p className="combo-grid__subtitle">Elige el combo perfecto para tu evento</p>
        </div>

        <SearchBar onSearch={setSearchTerm} />
        <FilterPanel onFilter={setFilters} />

        <div className="combo-grid__cards">
          {filteredCombos.length > 0 ? (
            filteredCombos.map(combo => (
              <ComboCard
                key={combo.id}
                combo={combo}
                onViewDetails={onSelectCombo}
              />
            ))
          ) : (
            <div className="combo-grid__empty">
              <p>No se encontraron combos con los filtros seleccionados</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComboGrid;