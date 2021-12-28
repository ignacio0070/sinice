import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu';
import './component/Menu.css'
import ItemListContainer from './component/ItemListContainer';
import ItemCount from './component/ItemCount';
import "./component/ItemCount.css";

function App() {
 
  // jsx
return(
  <div>
    < Menu/>
    <ItemListContainer greeting="saludos"/>
   <ItemCount stock= {5}  inicio= {1}  />
  </div>
 )
 
}

export default App;
