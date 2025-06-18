import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Importando o CSS customizado

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-4">
      <div className="container">
        <h2 className="navbar-brand">Agendamento Médico</h2>
        <nav>
          <Link className="btn btn-outline-primary me-2" to="/">Home</Link>
          <Link className="btn btn-outline-secondary" to="/servicos/Pediatria">Serviços</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
