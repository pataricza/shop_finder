import React from 'react';
import Button from '../components/Button/Button';

const Header = () => {
  const handleClick = (text) => {
    console.log(text); // eslint-disable-line 
  };

  return (
    <div className="app-header">
      <h1>header container lofasz</h1>
      <Button text="button component lófasz" handleClick={handleClick} />
    </div>
  );
};

export default Header;
