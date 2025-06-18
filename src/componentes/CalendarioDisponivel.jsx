import React from 'react';
import './CalendarioDisponivel.css';

function CalendarioDisponivel({ medicoId }) {
  return (
    <div>
      <h4>Calendário de Datas Disponíveis para o Médico: {medicoId}</h4>
      <p>(Aqui futuramente ficará o calendário com os dias e horários)</p>
    </div>
  );
}

export default CalendarioDisponivel;