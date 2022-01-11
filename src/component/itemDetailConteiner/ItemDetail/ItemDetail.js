import ItemCount from "../../ItemCounst/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({producto}) => {
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
                <ItemCount stock={producto.stock} inicio={1}/>
            </div>
            
        </div>
        </div>
    )
}

export default ItemDetail
