import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu';
import './component/Menu.css'
import ItemListContainer from './component/ItemListContainer';


function App() {
 
  // jsx
return(
  <div>
    < Menu/>
    <ItemListContainer greeting="saludos"/>
   
  </div>
 )
 
}

export default App;
