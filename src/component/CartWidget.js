import React from 'react'
import { Link } from 'react-router-dom'
import carrito from '../imagenes/carrito.jpg'
function CartWidget() {
    return (
        <Link to='../cart'> 
            <div className='contenedorCarrito'>
                <img className='carrito' src={carrito}/>
            </div>
        </Link>
    )
}


export default CartWidget
