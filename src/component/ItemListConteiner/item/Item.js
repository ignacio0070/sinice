

import React from 'react'

function Item({prod}) {
    return (
        
             <div className='encuadrar' key={prod.id}>
                    <div className='fondo'>
                         <h2 className='titProducto'>  {prod.name} </h2>
                         <img className='bici' src={prod.foto} alt='' />
                         <div>
                            <button className='detProducto' > <h3>Detalles del producto</h3></button>
                        </div>
                         <p> stock disponibles: {prod.stock} </p>
                    </div>   
               </div>
        
    )
}

export default Item

