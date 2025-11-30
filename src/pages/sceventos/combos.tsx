import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//Estilos
import '../../styles/EventStyles/combos.css';
//Componentes
import ComboGrid from '../../components/EventComponents/ComboGrid';
import ComboDetail from '../../components/EventComponents/ComboDetail';
//Interfaces
import type { Combo } from '../../types/eventsTypes/interfaces';

interface CombosProps {
  combos: Combo[];
}

const Combos: React.FC<CombosProps> = ({ combos }) => {
  const [selectedComboId, setSelectedComboId] = useState<number | null>(null);

  const selectedCombo = selectedComboId ? combos.find(combo => combo.id === selectedComboId) : null;

  if (selectedCombo) {
    return (
      <ComboDetail 
        combo={selectedCombo} 
        onBack={() => setSelectedComboId(null)} 
      />
    );
  }

  return (
    <div className="combos-page">
      
      <ComboGrid 
        combos={combos}
        onSelectCombo={setSelectedComboId}
      />

    <Link to="/scevents" className="home__hero-btn home__hero-btn--secondary">
            Volver 
    </Link>
    </div>
  );
};

export default Combos;