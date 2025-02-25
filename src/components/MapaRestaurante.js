

import React from 'react';

//modificado
import Mesa from './Mesa';

const MapaRestaurante = ({ mesas, seleccionarMesa }) => {
  <div>MapaRestaurante</div>
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {mesas.map((mesa) => (
        <Mesa key={mesa.id} mesa={mesa} seleccionarMesa={seleccionarMesa} />
      ))}
    </div>
  );
};

export default MapaRestaurante;
