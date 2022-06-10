import React from 'react';

import './App.css';
import ItemListContainer from './components/ItemListContainer';

//import ItemCount from './components/ItemCount';
/*import { BrowserRouter, Routes, Route } from "react-router-dom";*/

import NavBar from './components/NavBar';

function App() {
  /*  BORRADO PERTENECE AL ItemCount y Import ItemCount
  const onAdd =(count) =>{
    alert( `Sumaste ${count} productos `);
  }*/

  return (
    <>
      <NavBar />
      
      <ItemListContainer  bienvenida="Bienvenida a mi pagina con REACT" />
      {/*<ItemCount min={1} max={10} onAdd={onAdd} /> */}
    </>
  );
}

export default App;
