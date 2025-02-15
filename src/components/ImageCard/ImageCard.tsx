import s from './ImageCard.module.css';

interface ImageCardProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, onClick }) => {
  return (
    <div className={s.container}>
      <img src={src} alt={alt} onClick={onClick} />
    </div>
  );
};
export default ImageCard;