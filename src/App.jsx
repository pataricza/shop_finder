import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllShopsSuccess } from './actions/AllShopActions';

function App() {
  const dipatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:8080/shops')
      .then((data) => data.json())
      .then((data) => dipatch(getAllShopsSuccess(data)));
  }, []);

  return (
    <div>
      <h1>lofasz</h1>
    </div>
  );
}

export default App;
