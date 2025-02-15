import React from 'react';
import Modal from "react-modal";
import s from './ImageModal.module.css';

interface Image {
  src: string;
  alt: string;
}

interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <Modal isOpen={!!image} onRequestClose={onClose} className={s.modal}>
      {image && (
        <div className={s.content}>
          <img src={image.src} alt={image.alt} className={s.image} />
          <button onClick={onClose} className={s.modalBtn}>X</button>
        </div>
      )}
    </Modal>
  );
};
export default ImageModal;