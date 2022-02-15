import React from 'react'
import { Link } from 'react-router-dom'
import carrito from '../imagenes/carrito.jpg'
import{useCartContex}from "../context/cartContext"
function CartWidget() {
    const {cantProductos}=useCartContex()
    return (
        
        <Link to='../cart'> 
            <div className='contenedorCarrito'>
                <img className='carrito' src={carrito}/>
                <h3 className='cantProd'>{cantProductos()}</h3>
            </div>
        </Link>
       
        
    )
}


export default CartWidget
