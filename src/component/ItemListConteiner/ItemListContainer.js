import React from 'react'
import{ useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList/ItemList'
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"


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

    return (
        <div >
        <div className='fondoPro'>
            <div className='titulo'>
            <h1>{greeting}</h1>
            </div>
            { loading ? 
                <h2>Cargando...</h2> 
                     :
                      <ItemList productos={productos} />
                     
          }
          
                
        </div>
        
        <div className='redes'>
            <div>
                <h3 className='tituloR'>Informacion</h3>
                <p>Instagram: treyckers</p>
                <p>Meil: treyckers@hotmail.com</p>
                <p>Faceboock: treyckerss</p>
            </div>
            <div className='pepe'> 
                Bicicletas: Se conoce como bicicleta al medio de transporte que tiene dos ruedas,
                con pedales que permiten transmitir el movimiento a la rueda trasera a través de una cadena,
                un piñón y un plato.Se trata de un vehículo que se desplaza por la propulsión del propio usuario, quien debe pedalear.
            </div>
        </div>
        </div>
    )
}


export default ItemListContainer
