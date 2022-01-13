import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import {getFetch} from "../../help/mosck"
import ItemDetail from "./ItemDetail/ItemDetail"

const ItemDetailConteiner = () => {
    const {idDetalle} =useParams ()
  const [producto, setproducto] = useState({})
    
    useEffect(() => {
        
        getFetch
        .then(resp=> setproducto(resp.find(prod =>prod.id===idDetalle)))
        
    }, []) 
    console.dir(producto)
    return (
        <div>
            <ItemDetail producto= {producto} />
        </div>  
    )
}

export default ItemDetailConteiner
