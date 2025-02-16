import React, { useState } from 'react';
import { toast } from 'react-toastify';
import s from './SearchBar.module.css';

// Типизация пропсов компонента
interface SearchBarProps {
  onSearch: (topic: string) => void; // Функция, которая принимает строку
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [topic, setTopic] = useState<string>(''); // Типизация состояния как строки

  // Обработчик отправки формы
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!topic.trim()) {
      toast.error('Please enter search term!');
      return;
    }
    onSearch(topic); // передаем строку в onSearch
  };

  return (
    <div>
      <header className={s.container}>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTopic(e.target.value.trim()) // обработка изменения
            }
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.searchInput}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
