// components/ResumenReserva.js

import React from 'react';

const Reserva = ({ mesaSeleccionada, total }) => {
  <div>Reserva</div>
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Resumen de Reserva</h5>
        {mesaSeleccionada ? (
          <>
            <p>Mesa: {mesaSeleccionada.numero}</p>
            <p>Zona: {mesaSeleccionada.zona}</p>
            <p>Total: ${total}</p>
          </>
        ) : (
          <p>Seleccione una mesa para ver el resumen.</p>
        )}
      </div>
    </div>
  );
};

export default Reserva;
