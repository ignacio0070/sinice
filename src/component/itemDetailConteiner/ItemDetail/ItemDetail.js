import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContex } from "../../../context/cartContext"
import ItemCount from "../../ItemCounst/ItemCount"
import "./ItemDetail.css"




const ItemDetail = ({producto}) => {


const {argregarAlCarrito}= useCartContex ()
    



const [show,setShow] =useState(true)
    const onAdd= (contador)=>{
        argregarAlCarrito ({...producto, cantidad:contador})  
        setShow(false)
        console.log(contador)
        //sumarAlCarrito(...prudcuto ,contador , contador)
       
    }
    
    return (
        <div className="conteiner">
        <div className="conteinerPrin">
            
                <div className="nombrebici">
                    <h1> {producto.name}</h1>
                </div>
                        <img className="imgDet" src={producto.foto}/>
                <div>
                     <h2> {producto.precio} </h2>
                </div>
            <div> 
               {show ? <ItemCount stock={producto.stock} inicio={1} onAdd= {onAdd} /> :
               <div>
                    <Link to="/cart"><button className="terCom">Terminar la Compra</button></Link>
                    <Link to="/"><button className="segCom">Seguir Comprando</button></Link>
               </div> }

            </div>
            
        </div>
        </div>
    )
}

export default ItemDetail
