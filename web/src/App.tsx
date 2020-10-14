import React from 'react';

import Routes from './routes';

import GlobalStyles from './styles/global';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
