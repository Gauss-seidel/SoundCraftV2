import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//Estilos
import '../../styles/colors.css';
import '../../styles/EventStyles/djs.css';
//Componentes
import DJGrid from '../../components/EventComponents/DJGrid';
import DJProfile from '../../components/EventComponents/DJProfile';
//Interfaces
import type { DJ } from '../../types/eventsTypes/interfaces';

interface DJsProps {
  djs: DJ[];
}

const DJs: React.FC<DJsProps> = ({ djs }) => {
  const [selectedDJId, setSelectedDJId] = useState<number | null>(null);

  const selectedDJ = selectedDJId ? djs.find(dj => dj.id === selectedDJId) : null;

  if (selectedDJ) {
    return (
      <DJProfile 
        dj={selectedDJ} 
        onBack={() => setSelectedDJId(null)} 
      />
    );
  }

  return (
    <>
      <div className="djs-page">
        <DJGrid 
          djs={djs}
          onSelectDJ={setSelectedDJId}
        />
      </div>
      <Link to="/scevents" className="home__hero-btn home__hero-btn--secondary">
        Volver 
      </Link>
    </>
  );
};

export default DJs;