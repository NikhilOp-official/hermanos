
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full border-t-8 border-blue-500 border-opacity-80 border-solid h-12 w-12"></div>
    </div>
  );
};

export default Loader;
