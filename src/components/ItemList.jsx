import React from 'react'
import Item from './Item'

const ItemList = ({personajes}) => {
  return (
    <div>
        {personajes?.map(personaje => <Item /> )}
    </div>
  )
}

export default ItemList