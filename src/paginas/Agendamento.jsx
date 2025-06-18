import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../componentes/Header';
import CalendarioDisponivel from '../componentes/CalendarioDisponivel';
import FormularioAgendamento from '../componentes/FormularioAgendamento';

function Agendamento() {
  const { medicoId } = useParams();

  return (
    <div>
      <Header />
      <h1>Agendamento - Médico ID: {medicoId}</h1>
      <CalendarioDisponivel medicoId={medicoId} />
      <FormularioAgendamento medicoId={medicoId} />
    </div>
  );
}

export default Agendamento;