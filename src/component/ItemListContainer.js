import React from 'react'
import { getFetch } from './ItemList'
import{ useState,useEffect} from 'react'
import Item from './Item'


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
            { loading ? <h2>Cargando...</h2> 
                     :
            productos.map(prod=> 
                <div className='encuadrar' key={prod.id}>
                    <div className='fondo'>
                         <h2 className='titProducto'>  {prod.name} </h2>
                         <img className='bici' src={prod.foto} alt='' />
                         <Item/>
                         <p> stock disponibles: {prod.stock} </p>
                    </div>   
                </div>)}
                
        </div>
    )
}


export default ItemListContainer
