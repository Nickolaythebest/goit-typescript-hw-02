import React from 'react';
import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  newPage: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ newPage }) => {
  return (
    <button type='button' className={s.loadBtn} onClick={newPage}>Load more</button>
  );
};
export default LoadMoreBtn;
