// components/SelectorZona.js

import React from 'react';

const Zona = ({ zonaSeleccionada, setZonaSeleccionada }) => {
  const zonas = ['Terraza', 'Interior', 'VIP'];
<div>Zona</div>
  return (
    <div className="mb-4">
      <h5>Selecciona una zona:</h5>
      <select
        className="form-select"
        value={zonaSeleccionada}
        onChange={(e) => setZonaSeleccionada(e.target.value)}
      >
        <option value="">Todas</option>
        {zonas.map((zona) => (
          <option key={zona} value={zona}>{zona}</option>
        ))}
      </select>
    </div>
  );
};

export default Zona;
