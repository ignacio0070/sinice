
// creacion del contexto
import {useContext,createContext, useState } from "react";

 const cartContext =  createContext  ([])

export function useCartContex() {
    return  useContext(cartContext)
}

//creacion del componentee que maneja el contexto

export const CartContextPorvider =({children})=>{
    const [cartList, setCartList] = useState([])

    function argregarAlCarrito(items) {
       const indice=cartList.findIndex(i => i.id === items.id)
       if(indice > -1){
           const qtyVieja=cartList[indice].cantida

           let qtyNueva = qtyVieja +items.cantida
           cartList[indice].cantida=qtyNueva
           let arrAux=[...cartList]
           setCartList(arrAux)
       }else{
           setCartList([...cartList, items])
       }
    }
    function vaciarCarrito() {
        setCartList([])
        
    }
    console.log(cartList)

    return(
        <cartContext.Provider value={{
            cartList,
            argregarAlCarrito,
            vaciarCarrito
        }}>
            {children }
        </cartContext.Provider>
    )
} 