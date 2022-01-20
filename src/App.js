import {BrowserRouter ,Routes,Route} from "react-router-dom" 
import './App.css';
import Menu from './component/Menu';
import './component/Menu.css'
import ItemListContainer from './component/ItemListConteiner/ItemListContainer';
import "./component/ItemListConteiner/item/Item.css";
import ItemDetailConteiner from './component/itemDetailConteiner/ItemDetailConteiner';
import "./component/ItemCounst/ItemCount.css"
import Cart from "./component/Cart/Cart";
import { CartContextPorvider } from "./context/cartContext";






function App() {
  
  // jsx
  return(
    
  <CartContextPorvider>
    <BrowserRouter>
        < Menu/>
          <Routes>
            <Route exact path="/" element= {<ItemListContainer greeting="saludos"/>} />
            <Route exact path="/categoria/:idCategoria" element= {<ItemListContainer greeting="saludos"/>} />
            <Route exact path="/detalle/:idDetalle" element= {<ItemDetailConteiner/>} />
            <Route exact path="/cart" element= {<Cart/>} />
          </Routes>
      </BrowserRouter>
  </CartContextPorvider>
 )
 
}

export default App;
