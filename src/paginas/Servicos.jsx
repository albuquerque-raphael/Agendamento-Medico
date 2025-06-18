import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../componentes/Header';
import EnderecoClinica from '../componentes/EnderecoClinica';
import CardMedico from '../componentes/CardMedico';

function Servicos() {
  const { especialidade } = useParams();

  return (
    <div>
      <Header />
      <h1>Médicos de {especialidade}</h1>
      <EnderecoClinica />
      <CardMedico nome="Dr. João Silva" especialidade={especialidade} />
      <CardMedico nome="Dra. Maria Souza" especialidade={especialidade} />
    </div>
  );
}

export default Servicos;