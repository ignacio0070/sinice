import React from 'react'
import CartWidget from '../component/CartWidget'
import  "./CartWidget.css";

function Menu() {
    return (
        
            <nav className='menu'>
                <label className='logo' >Logo</label>
                <ul className='menu_items'>
                
                    <li><a href=''> Inicio</a></li>
                    <li> <a href=''>Repuestos</a></li>
                    <li> <a href=''>Bicicletas</a></li>
               
                </ul>
              <CartWidget/>
                
            </nav>
      
            
      
 
    )
}

export default Menu
