import React from 'react'
import styles from './navbar.module.css'
import { NavLink } from 'react-router-dom'
const Navbar = (props) => {
    
  return (
    <div className={props.navshow?styles.navbar:styles.notdisplay} onClick={()=>props.setnavshow(false)}>
        <NavLink to="/" className={({isActive})=>(isActive?styles.navactive:styles.navNonactive )}>Home</NavLink>
        <NavLink to="/product"  className={({isActive})=>(isActive?styles.navactive:styles.navNonactive )}>Product</NavLink>
        <NavLink to="/about" className={({isActive})=>(isActive?styles.navactive:styles.navNonactive )}>About</NavLink>
        <NavLink to="/contact" className={({isActive})=>(isActive?styles.navactive:styles.navNonactive )}>Contact</NavLink>
        <NavLink to="/cart"  className={({isActive})=>(isActive?styles.navactive:styles.navNonactive )}>Cart</NavLink>
    </div>
  )
}

export default Navbar