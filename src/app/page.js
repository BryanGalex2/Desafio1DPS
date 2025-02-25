
"use client";
import React, { useState } from 'react';
import MapaRestaurante from '@/components/MapaRestaurante';
import Reserva from '@/components/Reserva';
import Zona from '@/components/Zona';

const Home = () => {
  const [mesas, setMesas] = useState([
    { id: 1, numero: 1, disponible: true, zona: 'Terraza' },
    { id: 2, numero: 2, disponible: true, zona: 'Terraza' },
    { id: 3, numero: 3, disponible: true, zona: 'Interior' },
    { id: 4, numero: 4, disponible: true, zona: 'Interior' },
    { id: 5, numero: 5, disponible: true, zona: 'VIP' },
    { id: 6, numero: 6, disponible: true, zona: 'VIP' }
  ]);

  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);
  const [zonaSeleccionada, setZonaSeleccionada] = useState('');

  const seleccionarMesa = (id) => {
    const nuevaLista = mesas.map((mesa) => 
      mesa.id === id ? { ...mesa, disponible: !mesa.disponible } : mesa
    );
    setMesas(nuevaLista);
    setMesaSeleccionada(nuevaLista.find((mesa) => mesa.id === id));
  };

  const mesasFiltradas = zonaSeleccionada
    ? mesas.filter((mesa) => mesa.zona === zonaSeleccionada)
    : mesas;

  const total = mesaSeleccionada ? 100 * 4 : 0; // Ejemplo de cálculo total


  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Reserva de Mesas</h1>
      <Zona 
        zonaSeleccionada={zonaSeleccionada} 
        setZonaSeleccionada={setZonaSeleccionada} 
      />
      <MapaRestaurante 
        mesas={mesasFiltradas} 
        seleccionarMesa={seleccionarMesa} 
      />
      <Reserva 
        mesaSeleccionada={mesaSeleccionada} 
        total={total} 
      />
    </div>
  );
};

export default Home;