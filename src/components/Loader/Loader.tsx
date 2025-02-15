
import React from 'react';
import { FidgetSpinner } from "react-loader-spinner";


const Loader: React.FC = () => {
  return (
    <FidgetSpinner
      visible={true}
      height={80}
      width={80}
      ariaLabel="fidget-spinner-loading"
    />
  );
};
export default Loader;
