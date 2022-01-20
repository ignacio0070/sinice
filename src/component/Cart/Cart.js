import React from 'react'
import { useCartContex } from '../../context/cartContext'


const Cart =()=> {
    const {cartList }= useCartContex ()
    return (
        <div>
            Cart
            {cartList.map(prod => <li key={prod.id}>{prod.name} -cant: {prod.cantidad} </li>) }
            {/*<button onClick={vaciarCarrito}>Vaciar Carrito</button> */ }
            
        </div>
    )
}

export default Cart
