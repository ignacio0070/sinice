import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail/ItemDetail"
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailConteiner = () => {
    const {idDetalle} =useParams ()
  const [producto, setProducto] = useState({})
    
    useEffect(() => {
        const db =  getFirestore ()
    
    const queryProd= doc(db, 'items', idDetalle )
        getDoc(queryProd)
        .then(resp=> setProducto({id: resp.id, ...resp.data()}))
      
        
    }, []) 
    console.log(producto)
    return (
        <div>
            <ItemDetail producto= {producto} />
        </div>  
    )
}

export default ItemDetailConteiner
