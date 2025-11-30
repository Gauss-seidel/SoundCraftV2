import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//Estilos
import '../../styles/EventStyles/combos.css';
//Componentes
import ComboGrid from '../../components/EventComponents/ComboGrid';
import ComboDetail from '../../components/EventComponents/ComboDetail';
import BackgroundEvents from '../../components/EventComponents/BackGroundEvents';
//Interfaces
import type { Combo } from '../../types/eventsTypes/interfaces';
//hooks
import { useScrollTop } from "../../hooks/useScrollTop";

interface CombosProps {
  combos: Combo[];
}

const Combos: React.FC<CombosProps> = ({ combos }) => {
  useScrollTop();
  const [selectedComboId, setSelectedComboId] = useState<number | null>(null);

  const selectedCombo = selectedComboId ? combos.find(combo => combo.id === selectedComboId) : null;

  if (selectedCombo) {
    return (
      <><BackgroundEvents />
      <ComboDetail 
        combo={selectedCombo} 
        onBack={() => setSelectedComboId(null)} 
      />
      </>
    );
  }

  return (
    <>
    <BackgroundEvents />
    <div className="combos-page">
      <Link to="/scevents" className="bottonVolver">
              Volver 
      </Link>
      <ComboGrid 
        combos={combos}
        onSelectCombo={setSelectedComboId}
      />

    <Link to="/scevents" className="bottonVolver">
            Volver 
    </Link>
    </div>
    </>
  );
};

export default Combos;