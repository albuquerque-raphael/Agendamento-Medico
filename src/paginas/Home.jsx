import React from 'react';
import Header from '../componentes/Header';
import CardEspecialidade from '../componentes/CardEspecialidade';

function Home() {
  return (
    <div>
      <Header />
      <h1>Escolha uma Especialidade</h1>
      <CardEspecialidade especialidade="Pediatria" />
      <CardEspecialidade especialidade="Clínica Geral" />
      <CardEspecialidade especialidade="Cardiologia" />
    </div>
  );
}

export default Home;