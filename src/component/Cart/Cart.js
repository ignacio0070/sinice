import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContex } from '../../context/cartContext'
import "./Cart.css"
import {addDoc, collection,  getFirestore} from "firebase/firestore"
import Resumen from '../Resumen/Resumen'



const Cart =()=> {
    const {cartList ,deleteItem , vaciarCarrito,precioTotal,cantProductos}= useCartContex ()
    const [ condicion,setCondicion]=useState(false)
    const [dataForm, setDataForm ]=useState({
        email:'',
        name:'',
        phone:'',
        lastName:'',
        city:'',
        postalCode:''
    })
    
    const realizarCompra = async(e) =>{
        e.preventDefault()

        let orden = {}

        orden.buyer = dataForm
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
        .finally(()=> console.log("cargando"))
        setCondicion(true)
    }
    function handleChange(e){
        
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
            
        })
    }
    
    return (
        <div> 
            {
                condicion ?
                <Resumen/>
                :
                <>
                {cartList.length===0 ?(  
                    <div className='carro'>
                        <h2 className='faltanProd'>Aún no agregaste productos al carrito </h2>
                        <Link to="/"><button className='volver'>Volver</button></Link>
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
                                    <h3> Precio total: $ {precioTotal()} </h3>
                                    {<button className='vaciar' onClick={vaciarCarrito}>Vaciar Carrito</button>  }
                                    <h3> Cantida de productos: {cantProductos()} </h3>
                                </div>
                            <>
                            <form className='form' onSubmit={realizarCompra}>
                                <label htmlFor=''>Nombre</label>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Nombre'
                                    onChange={handleChange}
                                    value={dataForm.name}
            
                                />
                                <label htmlFor=''>Apellido</label>
                                <input
                                        type='text'
                                        name='lastName'
                                        placeholder='Apellido'
                                        onChange={handleChange}
                                        value={dataForm.lastName}
                                />

                                <label htmlFor='correo'>Email</label>
                                <input
                                        type='email'
                                        name='email'
                                        placeholder='@hotmail.com'
                                        onChange={handleChange}
                                        value={dataForm.email}
            
                                />
                                
                                <label>Ciudad</label>
                                <input
                                        type='text'
                                        name='city'
                                        placeholder='Ciudad'
                                        onChange={handleChange}
                                        value={dataForm.city}
                                />
                                <label>Codigo Postal</label>
                                <input
                                        type='number'
                                        name='postalCode'
                                        placeholder='5541'
                                        onChange={handleChange}
                                        value={dataForm.postalCode}
                                />
                                <label>Tel</label>
                                <input 
                                        type='number'
                                        name='phone'
                                        placeholder='208639'
                                        onChange={handleChange}
                                        value={dataForm.phone}
                                />
                                
                                {<button className='orden'>Generar orden</button>}
                            </form>
                          
                        </>
                        </div>
                  
                    )}
                </>
                
            }

           
        </div>
            
    )
}

export default Cart
