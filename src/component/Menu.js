import React from 'react'
import CartWidget from '../component/CartWidget'
import  "./CartWidget.css";
import {Link, NavLink} from "react-router-dom"
function Menu() {
    return (
        
      <nav className='menu'>
            <label className='logo' >Treyckers</label>
                <ul className='menu_items'>
                  <li><Link to="/">Inicio</Link></li>
                  <li> <Link to="/categoria/repuestos">Repuestos</Link></li>
                  <li> <Link to="/categoria/bici">Bicicletas</Link></li>
  
                </ul>
            <Link to="/cart">
              <CartWidget/>
            </Link>
          
      </nav>
      
            
      
 
    )
}

export default Menu
