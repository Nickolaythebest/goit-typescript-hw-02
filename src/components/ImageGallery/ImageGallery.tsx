import s from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

interface Image {
  id: string;
  urls: { small: string };
  alt_description: string;
  
}

interface ImageGalleryProps {
  gallery: Image[];
  onImageClick: (image: { src: string; alt: string }) => void;
}


const ImageGallery: React.FC<ImageGalleryProps> = ({ gallery, onImageClick }) => {
  return (
    <ul className={s.list}>
     {gallery.map(({ id, urls, alt_description }) => (
  <li key={id}>
    <ImageCard
      src={urls.small}
      alt={alt_description || 'No description'}
      onClick={() => onImageClick({ src: urls.small, alt: alt_description || 'No description' })}
    />
  </li>
))}

    </ul>
  );
};
export default ImageGallery;
