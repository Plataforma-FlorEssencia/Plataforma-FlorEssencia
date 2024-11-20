import React, { useState } from 'react';
import SideBar from "../../components/SideBar/SideBar";
import ModalAtividades from './ModalAtividades'; // Importe o componente atualizado do modal
import GridAtividades from './GridAtividades'; // Importe o novo componente da grid
import 'bootstrap/dist/css/bootstrap.min.css';
import './Atividade.css';

function Atividade() {
  const [isModalOpen, setModalOpen] = useState(false); // Estado para controlar o modal

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const gridItems = [
    { id: 1, row: 1, column: 51, link: '/pagina1' },
    { id: 2, row: 2, column: 52, link: '/pagina2' },
    { id: 3, row: 3, column: 53, link: '/pagina3' },
    { id: 4, row: 4, column: 52, link: '/pagina4' },
    { id: 5, row: 5, column: 51, link: '/pagina5' },
    { id: 6, row: 6, column: 52, link: '/pagina6' },
  ];

  return (
    <div className="main-atividades">
      <SideBar />
      <div className="body-atividade">
        <header className="hero-atividade">
          <h1 className="display-1 fw-bolder text-capitalize">OLÁ, ADRIANA</h1>
        </header>

        <div className="reflexao-dia">
          <h2 className="tag">Reflexão do Dia!</h2>
          <p></p>
          <button className='btn btn-pink btn-lg mt-2' onClick={handleOpenModal}>
            Vamos lá!
          </button>
        </div>

        <GridAtividades gridItems={gridItems} />

      </div>

      {isModalOpen && <ModalAtividades onClose={handleCloseModal} />}
    </div>
  );
}

export default Atividade;
