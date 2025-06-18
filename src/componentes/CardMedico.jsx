import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardMedico.css';

function CardMedico({ nome, especialidade }) {
  const navigate = useNavigate();

  const handleAgendar = () => {
    navigate(`/agendamento/${nome}`);
  };

  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <h3>{nome}</h3>
      <p>Especialidade: {especialidade}</p>
      <button onClick={handleAgendar}>Agendar Consulta</button>
    </div>
  );
}

export default CardMedico;