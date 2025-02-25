// components/Mesa.js

import React from 'react';

const Mesa = ({ mesa, seleccionarMesa }) => {
  const { id, numero, disponible, zona } = mesa;
  
  const handleClick = () => {
    if (disponible) {
      seleccionarMesa(id);
    }
  };
<div>Mesa</div>
  return (
    <button
      onClick={handleClick}
      className={`btn ${disponible ? 'btn-success' : 'btn-danger'} p-4`}
    >
      Mesa {numero} <br /> {zona}
    </button>
  );
};

export default Mesa;
