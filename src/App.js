import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu';
import './component/Menu.css'
import ItemListContainer from './component/ItemListConteiner/ItemListContainer';
import "./component/ItemListConteiner/item/Item.css";
import ItemDetailConteiner from './component/itemDetailConteiner/ItemDetailConteiner';
import "./component/ItemCounst/ItemCount.css"


function App() {
 
  // jsx
return(
  <div>
    < Menu/>
    <ItemListContainer greeting="saludos"/>
    <ItemDetailConteiner/>
   
  </div>
 )
 
}

export default App;
