import React from 'react'
import{ useState,useEffect} from 'react'
import { getFetch } from '../../help/mosck'
import ItemList from './ItemList/ItemList'



function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading]= useState(true)
    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false)) 
    
    }, [])
 console.log(productos)
    return (
        <div>
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
