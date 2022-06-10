import React, { useEffect , useState } from 'react'
import ItemList from './ItemList'

function ItemListContainer({bienvenida}) {
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .catch(error => console.error("Error", error))
    .then(res => setPersonajes(res.results ))
   
  }, [])
    console.log(personajes)

  return (
    //<div>{bienvenida}</div>
    <ItemList personajes={personajes} />
  )
}

export default ItemListContainer