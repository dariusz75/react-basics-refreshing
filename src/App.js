import React from 'react';
import './App.css';

import ListWrapper from './components/ListWrapper/ListWrapper';
import MyClassComponent from './components/ClassComponentExample/MyClassComponent';

function App() {
  return (
    <div className="App">
      <MyClassComponent />
      <ListWrapper />
    </div>
  );
}

export default App;
