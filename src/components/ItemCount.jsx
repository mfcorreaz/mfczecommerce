import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const ItemCount = ({min , max, onAdd}) => {
    const [count, setCount] = useState(min, max)
    
    const sumar = ()=>{
        if (count < max){
            setCount(count + 1)
        }else{
            alert('No puedes agregar mas productos');
        }
    }

    const restar = ()=>{
        count > min ? setCount(count - 1) : alert('No puedes quitar mas productos');
    }

    const reset = ()=>{
        setCount(min)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={()=> {onAdd(count); reset() }}><AddShoppingCartIcon /></button>
        </div>
  )
}

export default ItemCount