import React, { useState } from 'react';
import FeedbackSucesso from './FeedbackSucesso';

function FormularioAgendamento({ medicoId }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [agendado, setAgendado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    agendamentos.push({ nome, telefone, medicoId });
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
    setAgendado(true);
  };

  return (
    <div>
      <h4>Formulário de Agendamento</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome do Paciente" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        <button type="submit">Confirmar Agendamento</button>
      </form>
      {agendado && <FeedbackSucesso />}
    </div>
  );
}

export default FormularioAgendamento;