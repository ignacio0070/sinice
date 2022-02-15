import { Link } from 'react-router-dom';
import { useCartContex } from '../../context/cartContext'



const Resumen = () =>{
    const {cartList ,precioTotal,cantProductos}= useCartContex ()
    return (
        
            <div className='compras'>
                <>  
                    <h1>Su compra fue realisada correctamente</h1>
                    <p>Usted compro</p> 
                </>
                        {cartList.map(prod =>
                                
                            <div className='conteneder' key={prod.id}> 
                                <img className='imgCarro' src={prod.imageUrl} alt={prod.name}/>
                                <h3> {prod.name}</h3>
                                <h3> ${prod.precio} </h3>
                            </div>
                        ) 
                            }
                            <div className='totales'>
                                <h3> Precio total: $ {precioTotal()} </h3>
                                <Link to="/"><button className='volver'>Volver</button></Link>
                                <h3> Cantida de productos: {cantProductos()} </h3>
                            </div>
            </div>
        
    );
}
export default  Resumen ;