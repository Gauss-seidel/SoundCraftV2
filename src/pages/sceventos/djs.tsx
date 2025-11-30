import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//Estilos
import '../../styles/colors.css';
import '../../styles/EventStyles/djs.css';
//Componentes
import DJGrid from '../../components/EventComponents/DJGrid';
import DJProfile from '../../components/EventComponents/DJProfile';
import BackgroundEvents from '../../components/EventComponents/BackGroundEvents';
//Interfaces
import type { DJ } from '../../types/eventsTypes/interfaces';
//hooks
import { useScrollTop } from "../../hooks/useScrollTop";

interface DJsProps {
  djs: DJ[];
}

const DJs: React.FC<DJsProps> = ({ djs }) => {
  useScrollTop();
  const [selectedDJId, setSelectedDJId] = useState<number | null>(null);

  const selectedDJ = selectedDJId ? djs.find(dj => dj.id === selectedDJId) : null;

  if (selectedDJ) {
    return (
      <>
      <BackgroundEvents/>
      <DJProfile 
        dj={selectedDJ} 
        onBack={() => setSelectedDJId(null)} 
      />
      </>
    );
  }

  return (
    <>
      <div className="djs-page">
        <BackgroundEvents/>
        <Link to="/scevents" className="bottonVolver">
              Volver 
        </Link>
        <DJGrid 
          djs={djs}
          onSelectDJ={setSelectedDJId}
        />
      </div>
      <Link to="/scevents" className="bottonVolver">
              Volver 
      </Link>
    </>
  );
};

export default DJs;