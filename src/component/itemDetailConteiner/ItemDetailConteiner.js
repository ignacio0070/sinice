import { useEffect, useState} from "react"
import {getFetch} from "../../help/mosck"
import ItemDetail from "./ItemDetail/ItemDetail"

const ItemDetailConteiner = () => {
    
  const [producto, setproducto] = useState({})
    
    useEffect(() => {
        
        getFetch
        .then(resp=> setproducto(resp.find(prod =>prod.id==="1")))
        
    }, []) 
    console.dir(producto)
    return (
        <div>
            <ItemDetail producto= {producto} />
        </div>  
    )
}

export default ItemDetailConteiner
