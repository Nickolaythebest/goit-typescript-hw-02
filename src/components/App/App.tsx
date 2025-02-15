import { useState, useEffect, useCallback } from 'react';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import SearchBar from '../../components/SearchBar/SearchBar';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import ImageModal from '../../components/ImageModal/ImageModal';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import { fetchArticlesWithTopic } from '../../articles-api';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';

interface Image {
  id: string;
  urls: { small: string };
  alt_description: string;
}

const App: React.FC = () => {
  const [articles, setArticles] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [topic, setTopic] = useState<string>('');
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    const fetchArticlesData = async () => {
      try {
        setError(false);
        setLoading(true);
        const { results, total_pages } = await fetchArticlesWithTopic(topic, page);
        setArticles((prev) => [...prev, ...results]);
        setTotalPage(total_pages);
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (topic) fetchArticlesData();
  }, [page, topic]);

  const openModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const handleChange = () => {
    setPage((prev) => prev + 1);
  };

  const handleSearch = useCallback((newTopic: string) => {
    setTopic(newTopic);
    setArticles([]);
    setPage(1);
  }, []);

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {articles.length > 0 && <ImageGallery gallery={articles} onImageClick={openModal} />}
      {articles.length > 0 && page < totalPage && <LoadMoreBtn newPage={handleChange} />}
      {isModalOpen && selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
      {err && <ErrorMessage />}
      <ToastContainer />
    </div>
  );
};

export default App;
