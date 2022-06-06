import React from 'react';

import './App.css';
import ItemCount from './components/ItemCount';


import NavBar from './components/NavBar';

function App() {
  
  const onAdd =(count) =>{
    alert( `Sumaste ${count} productos `);
  }

  return (
    <>
      <NavBar />
      <h1>Bienvenido a mi ecommerce</h1>
      <ItemCount min={1} max={10} onAdd={onAdd} />
    </>
  );
}

export default App;
