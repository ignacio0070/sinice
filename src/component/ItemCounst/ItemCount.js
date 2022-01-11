import React from 'react'
import { useState} from 'react'
function ItemCount({stock ,inicio}) {
 
    const [count,setCount]= useState(inicio)
   const heandleIncrement=()=> {
       count< stock ? setCount(prev => prev+1): alert("stock maximo")

   }
  
   const heandleDecremente=()=> {
       count > inicio ? setCount(prev => prev-1) : alert("stock minimo")
   }
   const reset = ()=>{
       setCount(inicio)


   }
    return (

        <div className='recuContador' >
            <div className='contador'>
            <button className='restar' onClick={heandleDecremente}>-</button>
            {count} 
            <button className='sumar' onClick={heandleIncrement}>+</button> <br/>
            </div>
            <button className='agregar' onClick={reset}>Agregar al carrito</button>
            
        </div>
       
    )

}
export default ItemCount
