import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ErrorMessage: React.FC = () => {
  const notify = () => toast("Something wrong!");

  return (
    <div>
      <ToastContainer />
      <button onClick={notify}>Ok</button>
    </div>
  );
};
export default ErrorMessage;
