import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import BackgroundDecoration from './components/BackgroundDecoration/BackgroundDecoration.js';

function App() {
  return (
    <>
      <BackgroundDecoration />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
