import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContex } from '../../context/cartContext'
import "./Cart.css"


const Cart =()=> {
    const {cartList ,deleteItem , vaciarCarrito,precioTotal,cantProductos}= useCartContex ()
    return (
        <div> 

            {cartList.length===0 ?(  
            <div className='carro'>
                <h2 className='faltanProd'>Aún no agregaste productos al carrito </h2>
                <Link to="/"><button className='volver'>Ir al carrito</button></Link>
            </div>
            
        
        
            ): ( 
                <div className='compras'>
            {cartList.map(prod =>
            <div className='conteneder' key={prod.id}> 
            <img className='imgCarro' src={prod.foto} all={prod.name}/>
            <h3> {prod.name}</h3>
            <h3> ${prod.precio} </h3>
             <h3>-cant: {prod.cantidad} </h3> <button onClick={()=>deleteItem(prod.id)}>X</button>
             </div>
              
               ) }
             
             
            
             <div className='totales'>
            <h3> precio total: $ {precioTotal()} </h3>
            {<button className='vaciar' onClick={vaciarCarrito}>Vaciar Carrito</button>  }
            <h3> Cantida de productos: {cantProductos()} </h3>
            </div>
            </div>
          
            )}
        </div>
            
    )
}

export default Cart
