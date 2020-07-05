import React, { useEffect } from 'react';
import { getData } from '../../services/api';
import ROUTES from '../../Routes/index';

const { MainPage } = ROUTES;

function App() {
  useEffect(() => {
    getData('https://jsonplaceholder.typicode.com/comments')
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="app">
      <MainPage />
    </div>
  );
}

export default App;
