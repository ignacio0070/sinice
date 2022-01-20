import React from 'react'
import { useState} from 'react'
function ItemCount({stock ,inicio ,onAdd}) {
 
    const [contador,setContador]= useState(inicio)
   const heandleIncrement=()=> {
       contador< stock ? setContador(prev => prev+1): alert("stock maximo")

   }
  
   const heandleDecremente=()=> {
       contador > inicio ? setContador(prev => prev-1) : alert("stock minimo")
   }
   const reset = ()=>{
       setContador(inicio)


   }
    return (

        <div className='recuContador' >
            <div className='contador'>
            <button className='restar' onClick={heandleDecremente}>-</button>
            {contador} 
            <button className='sumar' onClick={heandleIncrement}>+</button> <br/>
            </div>
            <button className='agregar' onClick={()=> onAdd(contador) }>Agregar al carrito</button>
            
        </div>
       
    )

}
export default ItemCount
