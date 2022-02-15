
// creacion del contexto
import {useContext,createContext, useState } from "react";

 const cartContext =  createContext  ([])

export function useCartContex() {
    return  useContext(cartContext)
}

//creacion del componentee que maneja el contexto

export const CartContextPorvider =({children})=>{
    const [cartList,setCartList] = useState([])

    const argregarAlCarrito = (items)=> {
       
        if (isOnCart(items.id)) {
            
            sumarCantidad (items)
        } else {
            setCartList([...cartList,items])
        }
       
       
    }
    const   isOnCart=(id)=>{
        const carrito = cartList.some((prod)=> prod.id===id)
        return carrito
    }
    const sumarCantidad =(items)=>{
        const copia = [...cartList]
        copia.forEach((producto)=>{
            producto.id === items.id && (producto.cantidad += items.cantidad)
        })
            
       
    }
    const deleteItem = (id)=>{
        const itemBorrado = cartList.filter ((producto)=>producto.id !== id)
        setCartList(itemBorrado)
    }
    function vaciarCarrito() {
        setCartList([])
        
    }
    function precioTotal() {
        let count =0
        cartList.forEach((productos)=>
        count +=productos.precio * productos.cantidad
        )
        return count
        
    }
    function cantProductos () {
        let total =0
        cartList.forEach((productos)=>
        total+=productos.cantidad
        )
        return total
        
    }
    

    return(
        <cartContext.Provider value={{
            cartList,
            argregarAlCarrito,
            vaciarCarrito,
            deleteItem,
            precioTotal,
            cantProductos
        }}>
            {children }
        </cartContext.Provider>
    )
} 