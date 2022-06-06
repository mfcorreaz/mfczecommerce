import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidgets({items}) {
  return (
    <>
       <ShoppingCartIcon />
       <span>{items}</span> 
    </>
  )
}

export default CartWidgets