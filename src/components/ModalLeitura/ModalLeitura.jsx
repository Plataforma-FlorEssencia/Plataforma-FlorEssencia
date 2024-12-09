import React from "react";
import styles from "./ModalLeitura.module.css";

const ModalLeitura = ({ isOpen, onClose, titulo, imagem, autor, descricao, link }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.modalContent}>
          <img src={imagem} alt={titulo} className={styles.modalImage} />
          <div className={styles.modalDetails}>
            <h2 className={styles.modalTitle}>{titulo}</h2>
            <p className={styles.modalAuthor}> {autor}</p>
            <p className={styles.modalDescription}>{descricao}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalLink}
            >
              Acessar Artigo/Livro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLeitura;
