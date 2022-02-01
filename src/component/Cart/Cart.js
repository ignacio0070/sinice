import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContex } from '../../context/cartContext'
import "./Cart.css"
import {addDoc, collection,  getFirestore} from "firebase/firestore"


const Cart =()=> {
    const {cartList ,deleteItem , vaciarCarrito,precioTotal,cantProductos}= useCartContex ()

    const realizarCompra = async() =>{

        let orden = {}

        orden.buyer = {nombre:'pepe', email:'pepe@hotmail.com', tel: '1234567887'}
        orden.total = precioTotal();

        orden.items =cartList.map(cartItem=>{
            const id =cartItem.id;
            const nombre= cartItem.name;
            const precio = cartItem.precio *cartItem.cantidad;
            
            return {id, nombre, precio}
        })
        const db =getFirestore()
        const orenColelction = collection(db, 'orders')
        await addDoc(orenColelction, orden)
        .then(resp=> console.log(resp.id))
        .catch(err =>console.log(err))
    }
    
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
                        <img className='imgCarro' src={prod.imageUrl} alt={prod.name}/>
                        <h3> {prod.name}</h3>
                        <h3> ${prod.precio} </h3>
                        <h3>-cant: {prod.cantidad} </h3> <button onClick={()=>deleteItem(prod.id)}>X</button>
                        </div>
                        ) 
                    }
                    <div className='totales'>
                        <h3> precio total: $ {precioTotal()} </h3>
                        {<button className='vaciar' onClick={vaciarCarrito}>Vaciar Carrito</button>  }
                        {<button className='vaciar' onClick={realizarCompra}>Generar orden</button>}
                        <h3> Cantida de productos: {cantProductos()} </h3>
                    </div>
                </div>
          
            )}
        </div>
            
    )
}

export default Cart
