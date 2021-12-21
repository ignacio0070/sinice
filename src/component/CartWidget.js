import React from 'react'
import carrito from '../imagenes/carrito.jpg'
function CartWidget() {
    return (
        <div className='contenedorCarrito'>
            <img className='carrito' src={carrito}/>
        </div>
    )
}


export default CartWidget
