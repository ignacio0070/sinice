import React from 'react'
import{ useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList/ItemList'
import {collection, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore"


function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading]= useState(true)
     
    const {idCategoria} = useParams ()

    useEffect(() => {
        if (idCategoria) {
            
        const db =getFirestore()
        const queryCollection= query( collection ( db, 'items'),where("categoria","==",idCategoria)  )
        getDocs(queryCollection)
        .then(res => setProductos(res.docs.map(prod=> ({id: prod.id, ...prod.data() }))))
        .catch(err =>err)
        .finally(()=> setLoading(false))
        } else {
            
        const db =getFirestore()
        const queryCollection=  collection ( db, 'items') 
        getDocs(queryCollection)
        .then(res => setProductos(res.docs.map(prod=> ({id: prod.id, ...prod.data() }))))
        .catch(err =>err)
        .finally(()=> setLoading(false))
        }

    }, [idCategoria]) 
 console.log(productos)
    return (
        <div className='fondoPro'>
            {greeting}
            { loading ? 
                <h2>Cargando...</h2> 
                     :
                      <ItemList productos={productos} />
          }
                
        </div>
    )
}


export default ItemListContainer
