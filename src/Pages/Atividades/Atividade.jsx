import React, { useState } from 'react';
import SideBar from "../../components/SideBar/SideBar";
import ModalAtividades from './ModalAtividades'; // Importe o componente atualizado do modal
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
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
    { id: 1, row: 1, column: 51, link: '/MemoryGame' },
    { id: 2, row: 2, column: 52, link: '/MemoryGame' },
    { id: 3, row: 3, column: 53, link: '/MemoryGame' },
    { id: 4, row: 4, column: 52, link: '/MemoryGame' },
    { id: 5, row: 5, column: 51, link: '/MemoryGame' },
    { id: 6, row: 6, column: 52, link: '/MemoryGame' },
  ];

  const renderPopover = (item) => (
    <Popover id={`popover-${item.id}`}>
      <Popover.Header as="h3">Atividade Nº {item.id}</Popover.Header>
      <Popover.Body>
        <p>Explore a atividade clicando no botão abaixo:</p>
        <a
          href={item.link}
          className="btn btn-sm btn-pink custom-btn-size"
          role="button"
        >
          PRATICAR
        </a>
      </Popover.Body>
    </Popover>
  );

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

        <div className="grid-container">
          {gridItems.map(item => (
            <div
              key={item.id}
              className="grid-item"
              style={{ gridRow: item.row, gridColumn: item.column }}
            >
              <OverlayTrigger
                trigger="focus"
                placement="bottom"
                overlay={renderPopover(item)}
              >
                <Button
                  variant="white"
                  className="btn btn-lg"
                  aria-label={`Atividade ${item.id}`}
                >
                  <img
                    src="vasinho.svg"
                    alt={`Ícone de vaso para a atividade ${item.id}`}
                    width="80"
                    height="80"
                  />
                </Button>
              </OverlayTrigger>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && <ModalAtividades onClose={handleCloseModal} />}
    </div>
  );
}

export default Atividade;
