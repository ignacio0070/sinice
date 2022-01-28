import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import {getFetch} from "../../help/mosck"
import ItemDetail from "./ItemDetail/ItemDetail"
import {doc, getDoc, getFirestore, where} from "firebase/firestore"

const ItemDetailConteiner = () => {
    const {idDetalle} =useParams ()
  const [producto, setProducto] = useState({})
    
    useEffect(() => {
        const db =  getFirestore ()
    
    const queryProd= doc(db, 'items', idDetalle )
        getDoc(queryProd)
        .then(resp=> setProducto({id: resp.id, ...resp.data()}))
       // getFetch
        //.then(resp=> setproducto(resp.find(prod =>prod.id===idDetalle)))
        
    }, []) 
    console.log(producto)
    return (
        <div>
            <ItemDetail producto= {producto} />
        </div>  
    )
}

export default ItemDetailConteiner
