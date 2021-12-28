import React from 'react'
import carrito from '../imagenes/carrito.jpg'
function CartWidget() {
    return (
       <a href='../ItemCount.js'> <div className='contenedorCarrito'>
            <img className='carrito' src={carrito}/>
        </div></a>
    )
}


export default CartWidget
