import React from 'react'
import styles from './Header.module.css'
import { NavLink, Outlet } from 'react-router-dom'
import { AccountCircle, Facebook, Instagram, Pinterest, SearchOutlined, ShoppingBasket } from '@mui/icons-material'
const Header = () => {
  return (
    <div>
        <div className={styles.potrait}>
            <div className={styles.toppart}>
                <div className={styles.searchbox}>
                <SearchOutlined />
                 <input type="text" placeholder='Search...' />
                </div>
                <div className={styles.loginbox}>
                <div className={styles.login}><AccountCircle fontSize='large'/><span>Log In</span></div>
                <div ><ShoppingBasket fontSize='large'/></div>
                </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.link}>
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.nonactive)}  to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.nonactive)} to="/product">Product</NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.nonactive)} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.active : styles.nonactive)} to="/contact">Contact</NavLink>
              </div>
              <div className={styles.title}><h2 style={{fontWeight:"lighter"}}>E-Store</h2></div>
              <div className={styles.social}>
                <a href=""><i style={{fontSize:"24px",color:"white"}} className="fa"> &#xf09a; </i></a>
                <a href=""><i style={{fontSize:"24px",color:"white"}} className="fa">&#xf16d;</i></a>
                <a href=""><i style={{fontSize:"24px",color:"white"}} className="fa">&#xf0d2;</i></a>
              </div>
            </div>
        </div>
<Outlet />
    </div>
  )
}

export default Header