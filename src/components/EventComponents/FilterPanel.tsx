import { useState } from 'react';
import { Filter } from 'lucide-react';
//Estilos
import '../../styles/EventStyles/filterPanel.css';
//Interfaces
import type { Filters } from '../../types/eventsTypes/interfaces';

interface FilterPanelProps {
  onFilter: (filters: Filters) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilter }) => {
  const [filters, setFilters] = useState<Filters>({
    priceRange: 'all',
    capacity: 'all'
  });

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleReset = () => {
    const resetFilters: Filters = { priceRange: 'all', capacity: 'all' };
    setFilters(resetFilters);
    onFilter(resetFilters);
  };

  return (
    <div className="filter-panel">
      <div className="filter-panel__header">
        <Filter size={20} className="filter-panel__icon" />
        <h3 className="filter-panel__title">Filtros</h3>
        <button className="filter-panel__reset" onClick={handleReset}>
          Limpiar
        </button>
      </div>

      <div className="filter-panel__content">
        <div className="filter-panel__group">
          <label className="filter-panel__label">Rango de precio</label>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            className="filter-panel__select"
          >
            <option value="all">Todos los precios</option>
            <option value="low">Hasta ₲200.000</option>
            <option value="mid">₲200.000 - ₲500.000</option>
            <option value="high">Más de ₲500.000</option>
          </select>
        </div>

        <div className="filter-panel__group">
          <label className="filter-panel__label">Capacidad de asistentes</label>
          <select
            value={filters.capacity}
            onChange={(e) => handleFilterChange('capacity', e.target.value)}
            className="filter-panel__select"
          >
            <option value="all">Cualquier capacidad</option>
            <option value="small">50-100 personas</option>
            <option value="medium">100-300 personas</option>
            <option value="large">300-500 personas</option>
            <option value="xlarge">500+ personas</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;