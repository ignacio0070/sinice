import React from 'react'
import { Link  } from 'react-router-dom'

function Item({prod}) {
    return (
        
             <div className='encuadrar' key={prod.id}>
                    <div className='fondo'>
                            <h2 className='titProducto'>  {prod.name} </h2>
                            <img className='bici' src={prod.imageUrl} alt='' />
                        <div>
                            <Link to={`/detalle/${prod.id}`}>
                            <button className='detProducto' > <h3>Detalles del producto</h3></button>
                            </Link>
                        </div>
                            <p> stock disponibles: {prod.stock} </p>
                    </div>   
               </div>
        
    )
}

export default Item

