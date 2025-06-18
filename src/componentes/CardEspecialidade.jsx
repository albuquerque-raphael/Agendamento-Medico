import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardEspecialidade({ especialidade }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/servicos/${especialidade}`);
  };

  return (
    <div onClick={handleClick} style={{ border: '1px solid black', margin: '10px', padding: '10px', cursor: 'pointer' }}>
      <h3>{especialidade}</h3>
      <p>Clique para ver médicos desta especialidade</p>
    </div>
  );
}

export default CardEspecialidade;