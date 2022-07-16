import React from 'react';

import './Loader.scss';

const Loader = () => {
  return (
    <div className={'loader'}>
      <div className={'loader__item'}></div>
      <div className={'loader__item'}></div>
      <div className={'loader__item'}></div>
    </div>
  );
};

export default Loader;
