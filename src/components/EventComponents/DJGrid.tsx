import React from 'react';
//Estilos
import '../../styles/EventStyles/DjGrid.css';
//Componentes
import DJCard from '../../components/EventComponents/DJCard';
//Interfaces
import type { DJ } from '../../types/eventsTypes/interfaces'


interface DJGridProps {
  djs: DJ[];
  onSelectDJ: (id: number) => void;
}

const DJGrid: React.FC<DJGridProps> = ({ djs, onSelectDJ }) => {
  return (
    <div className="dj-grid">
      <div className="dj-grid__container">
        <div className="dj-grid__header">
          <h2 className="dj-grid__title">Nuestros DJs</h2>
          <p className="dj-grid__subtitle">Selecciona el DJ perfecto para tu evento</p>
        </div>

        <div className="dj-grid__cards">
          {djs.length > 0 ? (
            djs.map(dj => (
              <DJCard
                key={dj.id}
                dj={dj}
                onViewProfile={onSelectDJ}
              />
            ))
          ) : (
            <div className="dj-grid__empty">
              <p>No hay DJs disponibles en este momento</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DJGrid;